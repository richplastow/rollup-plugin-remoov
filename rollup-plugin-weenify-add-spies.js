import { simple as simpleWalk } from 'acorn-walk';
import { generate } from 'astring';

export default function addScanners(options = {}) {
    return {
        name: 'addScanners',
        transform(source, path) {
            const ast = this.parse(source);
            const pathHash = hash(path);
            let localTally = 0;
            const extendDeleteList = [];

            simpleWalk(ast, {
                IfStatement(node) {
                    // @TODO deal with these...
                    if (node.consequent.type === 'ContinueStatement') return;
                    if (node.consequent.type === 'BreakStatement') return;
                    if (node.consequent.type === 'ReturnStatement') return;
                    if (node.consequent.type === 'ThrowStatement') return;

                    // An ExpressionStatement is `if (x) foo()`.
                    // A BlockStatement is `if (x) { foo() }`.
                    // Anything else cannot be handled.
                    if (node.consequent.type !== 'ExpressionStatement'
                     && node.consequent.type !== 'BlockStatement'
                    ) throw Error(`consequent.type is '${node.consequent.type
                        }' not 'BlockStatement' or 'ExpressionStatement'`);

                    // An ExpressionStatement must be wrapped in a block, so that
                    // `WEENIFY.spy()` can be inserted.
                    if (node.consequent.type === 'ExpressionStatement')
                        node.consequent = createBlockStatementNode(node.consequent);

                    // At this point, `node.consequent.type` must be 'BlockStatement'.
                    // By default, the `WEENIFY.spy('E-...')` call will be placed
                    // at the end of the block, and will only be passed one argument.
                    let endInsertIndex = node.consequent.body.length;
                    let extendDelete = 0;

                    // Search the top-level of the block for a `return` statement, etc.
                    for (const [subIndex, subNode] of node.consequent.body.entries()) {
                        // If found, the `WEENIFY.spy('E-...')` call will be placed
                        // just before the `return` statement.
                        if (
                            subNode.type === 'ContinueStatement'
                         || subNode.type === 'BreakStatement'
                         || subNode.type === 'ReturnStatement'
                         || subNode.type === 'ThrowStatement'
                        ) {
                            endInsertIndex = subIndex;
                            extendDelete = generate(subNode).length;
                            break;
                        }
                    }

                    // At this point, `node.consequent.type` must be a 'BlockStatement'.
                    insertSpies(node.consequent, pathHash, localTally, endInsertIndex, extendDelete);

                    // Xx.
                    extendDeleteList.push(extendDelete);

                    // Ready for the next `WEENIFY.spy()` pair.
                    localTally += 1;

                    // If there is no `else` case, go to the next Node.
                    if (! node.alternate) return;

                    // `else if` is best handled by kicking the can down the road.
                    if (node.alternate.type === 'IfStatement') return;

                    // Repeat the above for the alternate.
                    if (node.alternate.type !== 'ExpressionStatement'
                     && node.alternate.type !== 'BlockStatement'
                    ) throw Error(`alternate.type is '${node.alternate.type
                        }' not 'BlockStatement' or 'ExpressionStatement'`);
                    if (node.alternate.type === 'ExpressionStatement')
                        node.alternate = createBlockStatementNode(node.alternate);
                    endInsertIndex = node.alternate.body.length;
                    extendDelete = 0;
                    for (const [subIndex, subNode] of node.alternate.body.entries()) {
                        if (
                            subNode.type === 'ContinueStatement'
                         || subNode.type === 'BreakStatement'
                         || subNode.type === 'ReturnStatement'
                         || subNode.type === 'ThrowStatement'
                        ) {
                            endInsertIndex = subIndex;
                            extendDelete = generate(subNode).length;
                            break;
                        }
                    }
                    insertSpies(node.alternate, pathHash, localTally, endInsertIndex, extendDelete);
                    extendDeleteList.push(extendDelete);
                    localTally += 1;

                },
            })

            // console.log(JSON.stringify(ast,null,2));
            let regenerated = generate(ast);

            // If any WEENIFY.spy() pairs were added, insert the standard
            // Weenify boilerplate to the top of the source code.
            if (localTally > 0) {
                regenerated = [
                    "// BEGIN_WEENIFY_BOILERPLATE",
                    "typeof window === 'object'",
                    "    ? (() => window.WEENIFY = window.WEENIFY || {})()",
                    "    : typeof global === 'object'",
                    "        ? (() => global.WEENIFY = global.WEENIFY || {})()",
                    "        : (() => { throw Error('Weenify: No `window` or `global`') })();",
                    "!function(){ // begin iife",
                    "const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;",
                    "W.pathHashes = W.pathHashes || [];",
                    `W.pathHashes.push('${pathHash}');`,
                    "W.begin = W.begin || {};",
                    `W.begin['${pathHash}'] = new Set();`,
                    "W.end = W.end || {};",
                    `W.end['${pathHash}'] = new Set();`,
                    "W.errors = W.errors || [];",
                    "W.ignore = W.ignore || {};",
                    `W.ignore['${pathHash}'] = [];`,
                    "W.remove = W.remove || {};",
                    `W.remove['${pathHash}'] = [];`,
                    "W.extendDelete = W.extendDelete || {};",
                    `W.extendDelete['${pathHash}'] = [ ${extendDeleteList.join()} ];`,
                    "W.spy = W.spy || function weenifySpy(id) {",
                    "    const [ place, pathHash, index, _extendDelete ] = id.split('-');",
                    "    if (place === 'B')",
                    "        W.begin[pathHash].add(+index);",
                    "    else // place === 'E'",
                    "        W.end[pathHash].add(+index);",
                    "}",
                    "W.scan = W.scan || function weenifyScan() {",
                    "    for (const pathHash of W.pathHashes) {",
                    // `        console.log(W.pathHashes, W.remove, W.extendDelete[pathHash].length);`,
                    `        for (let i=0; i<W.extendDelete[pathHash].length; i++) {`,
                    `            const didBegin = W.begin[pathHash].has(i);`,
                    `            const didEnd = W.end[pathHash].has(i);`,
                    "            if (!didBegin && !didEnd) {",
                    `                W.remove[pathHash].push(i);`,
                    "            } else if (didBegin && didEnd) {",
                    `                W.ignore[pathHash].push(i);`,
                    "            } else {",
                    "                W.errors.push(`Mismatch ${pathHash} ${i}`);",
                    "                W.ignore[pathHash].push(i);", // @TODO recognise 04-ifs-nested-basic.js and similar, and then remove this line
                    "            }",
                    "        }",
                    "    }",
                    "    let ignoreLists = [];",
                    "    let removeLists = [];",
                    "    let extdltLists = [];",
                    "    for (const pH of W.pathHashes) {",
                    "        ignoreLists.push(`        '${pH}': [ ${W.ignore[pH].join()} ]`);",
                    "        removeLists.push(`        '${pH}': [ ${W.remove[pH].join()} ]`);",
                    "        extdltLists.push(`        '${pH}': [ ${W.extendDelete[pH].join()} ]`);",
                    "    }",
                    "    console.log(",
                    "        'const weenifyOptions = {\\n' +",
                    "        '    extendDelete: {\\n' +",
                    "        extdltLists.join(',\\n') +",
                    "        '\\n    },\\n' +",
                    "        '    ignore: {\\n' +",
                    "        ignoreLists.join(',\\n') +",
                    "        '\\n    },\\n' +",
                    "        '    remove: {\\n' +",
                    "        removeLists.join(',\\n') +",
                    "        '\\n    },\\n' +",
                    "        '};'",
                    "    );",
                    "}",
                    ! options.callScan ? '' :
                        "if (! W.didPrepScanCall) {\n" +
                        `    setTimeout(() => W.scan(), ${options.callScan});\n` +
                        `    W.didPrepScanCall = true;\n` +
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

function insertSpies(blockNode, path, localTally, endInsertIndex, extendDelete) {
    blockNode.body.unshift(createSpyFunction(
        'B', // before
        path,
        localTally,
        extendDelete,
    ));
    blockNode.body.splice(endInsertIndex + 1, 0, createSpyFunction(
        'E', // end
        path,
        localTally,
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
