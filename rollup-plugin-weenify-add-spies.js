import {
    ancestor as ancestorWalk,
    simple as simpleWalk,
} from 'acorn-walk';
import { generate } from 'astring';

export default function addSpies(options = {}) {
    return {
        name: 'addSpies',
        transform(source, path) {
            const ast = this.parse(source);
            const pathHash = hash(path);
            let currentSpyIndex = -1;

            // console.log(JSON.stringify(ast,null,2));
            
            // Most Nodes can be dealt with using a simple walk.
            simpleWalk(ast, {

                ArrowFunctionExpression(node) {
                    // Create an identifier for this `WEENIFY.spy()` call, unique
                    // within the current `path`.
                    currentSpyIndex += 1;

                    // A 'statement' Node must be wrapped in a block, so that
                    // `WEENIFY.spy()` can be inserted at the top of that block.
                    // An arrow function might be:
                    // - ExpressionStatement: (a) => b()
                    // which must be transformed into:
                    // - BlockStatement:      (a) => { b() }
                    if (node.body.type !== 'BlockStatement')
                        node.body = createBlockStatementNode(node.body);

                    // At this point, `node` must be a BlockStatement.
                    // Insert the `WEENIFY.spy()` call at the top of the block.
                    insertSpyCall(node.body.body, pathHash, currentSpyIndex);
                },

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
                    insertSpyCall(node.consequent.body, pathHash, currentSpyIndex);

                    // If there is no `else` case, go to the next Node.
                    if (! node.alternate) return;

                    // `else if` is best handled by kicking the can down the road.
                    if (node.alternate.type === 'IfStatement') return;

                    // Repeat the above for the alternate.
                    currentSpyIndex += 1;
                    if (node.alternate.type !== 'BlockStatement')
                        node.alternate = createBlockStatementNode(node.alternate);
                    insertSpyCall(node.alternate.body, pathHash, currentSpyIndex);
                },

                ForStatement(node) {
                    currentSpyIndex += 1;
                    if (node.body.type !== 'BlockStatement')
                        node.body = createBlockStatementNode(node.body);
                    insertSpyCall(node.body.body, pathHash, currentSpyIndex);
                },

                ForInStatement(node) {
                    currentSpyIndex += 1;
                    if (node.body.type !== 'BlockStatement')
                        node.body = createBlockStatementNode(node.body);
                    insertSpyCall(node.body.body, pathHash, currentSpyIndex);
                },

                ForOfStatement(node) {
                    currentSpyIndex += 1;
                    if (node.body.type !== 'BlockStatement')
                        node.body = createBlockStatementNode(node.body);
                    insertSpyCall(node.body.body, pathHash, currentSpyIndex);
                },

                FunctionDeclaration(node) {
                    currentSpyIndex += 1;
                    if (node.body.type !== 'BlockStatement')
                        node.body = createBlockStatementNode(node.body);
                    insertSpyCall(node.body.body, pathHash, currentSpyIndex);
                },

                FunctionExpression(node) { // MethodDefinition contains this
                    currentSpyIndex += 1;
                    if (node.body.type !== 'BlockStatement')
                        node.body = createBlockStatementNode(node.body);
                    insertSpyCall(node.body.body, pathHash, currentSpyIndex);
                },

                SwitchStatement(node) {
                    currentSpyIndex += 1;
                    // if (! Array.isArray(node.cases)) throw Error(
                    //     `addSpies(): SwitchStatement cases is not an array`);
                    for (const caseNode of node.cases) {
                        // if (! Array.isArray(caseNode.consequent)) throw Error(
                        //     `addSpies(): SwitchCase consequent is not an array`);
                        if (caseNode.consequent.length === 0) {
                            caseNode.consequent.push({
                                type: 'BlockStatement',
                                start: 0,
                                end: 0,
                                body: [],
                            });
                        // } else if (! caseNode.consequent[0]) {
                        //     throw Error(`addSpies(): SwitchCase consequent[0] is falsey:\n${JSON.stringify(caseNode,null,2)}`);
                        } else if (caseNode.consequent[0].type !== 'BlockStatement') {
                            caseNode.consequent[0] = createBlockStatementNode(caseNode.consequent[0]);
                        }
                        insertSpyCall(caseNode.consequent[0].body, pathHash, currentSpyIndex);
                    }
                },

                WhileStatement(node) {
                    currentSpyIndex += 1;
                    if (node.body.type !== 'BlockStatement')
                        node.body = createBlockStatementNode(node.body);
                    insertSpyCall(node.body.body, pathHash, currentSpyIndex);
                },
            });

            // Property Nodes need an ancestor walk, so that a getter and setter
            // can be placed alongside each other.
            ancestorWalk(ast, {
                Property(node, ancestors) {

                    // Weenify spies on property access by converting simple
                    // literal properties into getters.
                    if (node.kind !== 'init') return; // @TODO describe when this is not 'init'
                    if (node.value?.type !== 'Literal') return; // @TODO describe when this is not 'Literal'

                    // Create an identifier for this `WEENIFY.spy()` call, unique
                    // within the current `path`.
                    currentSpyIndex += 1;

                    // Get a reference to the object Node which contains the property.
                    const object = ancestors[ancestors.length-2];
                    if (object.type !== 'ObjectExpression') throw Error(
                        `addSpies(): object.type is '${object.type}' not 'ObjectExpression'`);
                    if (! Array.isArray(object.properties)) throw Error(
                        `addSpies(): object.properties is '${typeof object.properties}' not an array`);
                    // console.log(JSON.stringify(object,null,2));

                    // Get the index of the property Node within the object.
                    let found = false;
                    let position = 0;
                    for (; position<object.properties.length; position++)
                        if (object.properties[position] === node) {
                            found = true;
                            break;
                        }
                    if (! found) throw Error(
                        `weenify(): object.properties does not contain the expected property`);

                    // Svae the property’s name and value, before deleting it.
                    const key = node.key;
                    const defaultValue = node.value;
                    object.properties.splice(position, 1);

                    // Generate and add the getter and setter.
                    insertGetter(object.properties, pathHash, currentSpyIndex, position, key, defaultValue);
                    insertSetter(object.properties, pathHash, currentSpyIndex, position + 1, key, defaultValue);
                },
            });

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
                    "}(); // end iife // END_WEENIFY_BOILERPLATE",
                    "",
                    regenerated,
                ].join('\n');
            }

            // console.log(regenerated);
            return regenerated;
        }
    }
}

function insertSpyCall(body, pathHash, index, xtra = false) {
    if (typeof body !== 'object')
        throw Error(`insertSpyCall(): body is '${typeof body}' not 'object'`);
    if (! Array.isArray(body))
        throw Error(`insertSpyCall(): body is '${body.constructor.name}' not an array`);
    if (typeof body.unshift !== 'function')
        throw Error('insertSpyCall(): No unshift() on:', console.log(JSON.stringify(body,null,2)));
    const id = `${pathHash}-${index}${xtra ? `-${xtra}` : ''}`;
    body.unshift({
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
    });
}

function createBlockStatementNode(singleChildNode) {
    return {
        type: 'BlockStatement',
        start: 0,
        end: 0,
        body: [singleChildNode],
    }
}

function insertGetter(properties, pathHash, index, position, key, defaultValue) {
    if (typeof properties !== 'object')
        throw Error(`insertGetter(): properties is '${typeof properties}' not 'object'`);
    if (! Array.isArray(properties))
        throw Error(`insertGetter(): properties is '${properties.constructor.name}' not an array`);
    if (typeof properties.splice !== 'function')
        throw Error('insertGetter(): No splice() on:', console.log(JSON.stringify(properties,null,2)));
    const getter = {
        type: 'Property',
        start: 0,
        end: 0,
        method: false,
        shorthand: false,
        computed: false,
        key,
        kind: 'get',
        value: {
            type: 'FunctionExpression',
            start: 0,
            end: 0,
            id: null,
            expression: false,
            generator: false,
            async: false,
            params: [],
            body: {
                type: 'BlockStatement',
                start: 0,
                end: 0,
                body: [{
                    type: 'ReturnStatement',
                    start: 0,
                    end: 0,
                    argument: {
                        type: 'ConditionalExpression',
                        start: 0,
                        end: 0,
                        test: {
                        type: 'BinaryExpression',
                        start: 0,
                        end: 0,
                        left: {
                            type: 'UnaryExpression',
                            start: 0,
                            end: 0,
                            operator: 'typeof',
                            prefix: true,
                            argument: {
                                type: 'MemberExpression',
                                start: 0,
                                end: 0,
                                object: {
                                    type: 'ThisExpression',
                                    start: 0,
                                    end: 0,
                                },
                                property: {
                                    type: 'Identifier',
                                    start: 0,
                                    end: 0,
                                    name: `__WEENIFY__${key.name || key.value}`
                                },
                                computed: false,
                                optional: false
                            }
                        },
                        operator: '===',
                        right: {
                            type: 'Literal',
                            start: 0,
                            end: 0,
                            value: 'undefined',
                            raw: "'undefined'"
                        }
                        },
                        consequent: defaultValue,
                        alternate: {
                            type: 'MemberExpression',
                            start: 0,
                            end: 0,
                            object: {
                                type: 'ThisExpression',
                                start: 0,
                                end: 0,
                            },
                            property: {
                                type: 'Identifier',
                                start: 0,
                                end: 0,
                                name: `__WEENIFY__${key.name || key.value}`
                            },
                            computed: false,
                            optional: false
                        }
                    }
                }]
            }
        }
    };
    insertSpyCall(getter.value.body.body, pathHash, index, 'G');
    properties.splice(position, 0, getter);
}

function insertSetter(properties, pathHash, index, position, key) {
    if (typeof properties !== 'object')
        throw Error(`insertSetter(): properties is '${typeof properties}' not 'object'`);
    if (! Array.isArray(properties))
        throw Error(`insertSetter(): properties is '${properties.constructor.name}' not an array`);
    if (typeof properties.splice !== 'function')
        throw Error('insertSetter(): No splice() on:', console.log(JSON.stringify(properties,null,2)));
    const setter = {
        type: 'Property',
        start: 0,
        end: 0,
        method: false,
        shorthand: false,
        computed: false,
        key,
        kind: 'set',
        value: {
            type: 'FunctionExpression',
            start: 0,
            end: 0,
            id: null,
            expression: false,
            generator: false,
            async: false,
            params: [{
                type: 'Identifier',
                start: 0,
                end: 0,
                name: 'val'
            }],
            body: {
                type: 'BlockStatement',
                start: 0,
                end: 0,
                body: [{
                    type: 'ExpressionStatement',
                    start: 0,
                    end: 0,
                    expression: {
                        type: 'AssignmentExpression',
                        start: 0,
                        end: 0,
                        operator: '=',
                        left: {
                            type: 'MemberExpression',
                            start: 0,
                            end: 0,
                            object: {
                                type: 'ThisExpression',
                                start: 0,
                                end: 0
                            },
                            property: {
                                type: 'Identifier',
                                start: 0,
                                end: 0,
                                name: `__WEENIFY__${key.name || key.value}`
                            },
                            computed: false,
                            optional: false
                        },
                        right: {
                            type: 'Identifier',
                            start: 0,
                            end: 0,
                            name: 'val'
                        }
                    }
                }]
            }
        }
    };
    insertSpyCall(setter.value.body.body, pathHash, index, 'S');
    properties.splice(position, 0, setter);
}

function hash(str) {
    return Math.abs(
        Array.from(str).reduce(
            (hash, char) => 0 | (31 * hash + char.charCodeAt(0)),
            0
        )
    ).toString(36)
}
