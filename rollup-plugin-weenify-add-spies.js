import { simple as simpleWalk } from 'acorn-walk';
import { generate } from 'astring';

export default function addSpies(options = {}) {
    return {
        name: 'addSpies',
        transform(source, path) {
            const ast = this.parse(source);
            const pathHash = hash(path);
            let currentSpyIndex = -1;

            simpleWalk(ast, {
                IfStatement(node) {
                    // Create an identifier for this `WEENIFY.spy()` call, unique
                    // within the current `path`.
                    currentSpyIndex += 1;

                    // A 'statement' Node must be wrapped in a block, so that
                    // `WEENIFY.spy()` can be inserted at the top of that block.
                    // - BlockStatement:      if (a) { ... }
                    // - BreakStatement:      while (a) if (b) break
                    // - ContinueStatement:   while (a) if (b) continue
                    // - ExpressionStatement: if (a) b()
                    // - ReturnStatement:     if (a) return
                    // - ThrowStatement:      if (a) throw b
                    if (node.consequent.type !== 'BlockStatement')
                        node.consequent = createBlockStatementNode(node.consequent);

                    // At this point, `node.consequent` must be a BlockStatement.
                    // Insert the `WEENIFY.spy()` call at the top of the block.
                    node.consequent.body.unshift({
                        type: 'ExpressionStatement',
                        start: 0,
                        end: 0,
                        expression: {
                            type: 'CallExpression',
                            start: 0,
                            end: 0,
                            callee: {
                                type: 'Identifier',
                                start: 0,
                                end: 0,
                                name: 'WEENIFY.spy'
                            },
                            arguments: [{
                                type: 'Literal',
                                start: 0,
                                end: 0,
                                value: `${pathHash}-${currentSpyIndex}`,
                                raw: `'${pathHash}-${currentSpyIndex}'`,
                            }],
                            optional: false
                        }
                    });

                    // If there is no `else` case, go to the next Node.
                    if (! node.alternate) return;

                    // `else if` is best handled by kicking the can down the road.
                    if (node.alternate.type === 'IfStatement') return;

                    // Repeat the above for the alternate.
                    currentSpyIndex += 1;
                    if (node.alternate.type !== 'BlockStatement')
                        node.alternate = createBlockStatementNode(node.alternate);
                    node.alternate.body.unshift({
                        type: 'ExpressionStatement',
                        start: 0,
                        end: 0,
                        expression: {
                            type: 'CallExpression',
                            start: 0,
                            end: 0,
                            callee: {
                                type: 'Identifier',
                                start: 0,
                                end: 0,
                                name: 'WEENIFY.spy'
                            },
                            arguments: [{
                                type: 'Literal',
                                start: 0,
                                end: 0,
                                value: `${pathHash}-${currentSpyIndex}`,
                                raw: `'${pathHash}-${currentSpyIndex}'`,
                            }],
                            optional: false
                        }
                    });
                },
            })

            // console.log(JSON.stringify(ast,null,2));
            let regenerated = generate(ast);

            // If any WEENIFY.spy() calls were added, insert the standard
            // Weenify boilerplate to the top of the file. Note that Rollup may
            // concatenate many files, so this boilerplate (with different values
            // for pathHash and numSpies) may be appear many times in a
            // concatenated file.
            // Later, rollup-plugin-weenify.js will remove all the boilerplate.
            if (currentSpyIndex >= 0) {
                regenerated = [
                    "// BEGIN_WEENIFY_BOILERPLATE",
                    "typeof window === 'object'",
                    "    ? (() => window.WEENIFY = window.WEENIFY || {})()",
                    "    : typeof global === 'object'",
                    "        ? (() => global.WEENIFY = global.WEENIFY || {})()",
                    "        : (() => { throw Error('Weenify: No `window` or `global`') })();",
                    "!function(){ // begin iife",
                    "const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;",
                    "W.numSpies = W.numSpies || {};",
                    `W.numSpies['${pathHash}'] = ${currentSpyIndex + 1};`,
                    "W.spyResults = W.spyResults || {};",
                    `W.spyResults['${pathHash}'] = [];`,
                    "W.spyCalls = W.spyCalls || {};",
                    `W.spyCalls['${pathHash}'] = new Set();`,
                    "W.spy = W.spy || function weenifySpy(id) {",
                    "    const [ pathHash, index ] = id.split('-');",
                    "        W.spyCalls[pathHash].add(+index);",
                    "}",
                    "W.scan = W.scan || function weenifyScan() {",
                    "    for (const pathHash in W.spyCalls) {",
                    "        for (let i=0; i<W.numSpies[pathHash]; i++) {",
                    "            W.spyResults[pathHash].push(",
                    "                W.spyCalls[pathHash].has(i) ? 0 : 1",
                    "            )",
                    "        }",
                    "    }",
                    "    let spyResultsLists = [];",
                    "    for (const pathHash in W.spyCalls) {",
                    "        spyResultsLists.push(`        '${pathHash}': [ ${W.spyResults[pathHash].join()} ]`);",
                    "    }",
                    "    console.log(",
                    "        'const weenifyOptions = {\\n' +",
                    "        '    spyResults: {\\n' +",
                    "        spyResultsLists.join(',\\n') +",
                    "        '\\n    },\\n' +",
                    "        '};'",
                    "    );",
                    "}",
                    ! options.callScan ? '' :
                        "if (! W.didPrepScanCall) {\n" +
                        `    setTimeout(() => W.scan(), ${options.callScan});\n` +
                        "    W.didPrepScanCall = true;\n" +
                        "}",
                    "}(); // end iife",
                    "// END_WEENIFY_BOILERPLATE",
                    "",
                    regenerated,
                ].join('\n');
            }

            // console.log(regenerated);
            return regenerated;
        }
    }
}

function insertSpies(blockNode, path, currentSpyIndex, endInsertIndex, extendDelete) {
    blockNode.body.unshift(createSpyFunction(
        'B', // before
        path,
        currentSpyIndex,
        extendDelete,
    ));
    blockNode.body.splice(endInsertIndex + 1, 0, createSpyFunction(
        'E', // end
        path,
        currentSpyIndex,
        extendDelete,
    ));
}

function createSpyFunction(place, pathHash, index, extendDelete) {
    const id = `${place}-${pathHash}-${index}-${extendDelete}`;
    return {
        type: 'ExpressionStatement',
        start: 0,
        end: 0,
        expression: {
            type: 'CallExpression',
            start: 0,
            end: 0,
            callee: {
                type: 'Identifier',
                start: 0,
                end: 0,
                name: 'WEENIFY.spy'
            },
            arguments: [{
                type: 'Literal',
                start: 0,
                end: 0,
                value: id,
                raw: `'${id}'`,
            }],
            optional: false
        }
    }
}

function createBlockStatementNode(singleChildNode) {
    return {
        type: 'BlockStatement',
        start: 0,
        end: 0,
        body: [singleChildNode],
    }
}

function hash(str) {
    return Math.abs(
        Array.from(str).reduce(
            (hash, char) => 0 | (31 * hash + char.charCodeAt(0)),
            0
        )
    ).toString(36)
}
