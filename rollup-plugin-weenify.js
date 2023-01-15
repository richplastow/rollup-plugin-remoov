import { ancestor as ancestorWalk } from 'acorn-walk';
import { generate } from 'astring';

export default function weenify(options = {}) {
    options.passes = options.passes || 10;
    return {
        name: 'weenify',
        transform: function (source) {
            return transform(source, options, this.parse, options.passes);
        }
    }
}

function transform(source, options, parse, passes) {
    let src = source.toString(); // don't assume `source` is already a string

    // Remove every pair of `// BEGIN_WEENIFY_BOILERPLATE` and 
    // `// END_WEENIFY_BOILERPLATE` comments, and everything inbetween.
    while (true) {
        const begin = '// BEGIN_WEENIFY_BOILERPLATE\n';
        const end   = '// END_WEENIFY_BOILERPLATE\n';
        const beginPos = src.indexOf(begin);
        const endPos   = src.indexOf(end);
        if (beginPos === -1 && endPos === -1) break;
        if (beginPos !== -1 && endPos !== -1) {
            src = src.slice(0, beginPos) + src.slice(endPos + end.length);
        } else if (beginPos === -1) {
            throw Error('Missing `// BEGIN_WEENIFY_BOILERPLATE`');
        } else {
            throw Error('Missing `// END_WEENIFY_BOILERPLATE`');
        }
    }

    const ast = parse(src);
    // console.log(JSON.stringify(ast,null,2));

    // Find all `WEENIFY.spy('...')` calls.
    ancestorWalk(ast, {
        CallExpression(node, ancestors) {
            // Ignore calls that are not to `WEENIFY.spy().
            if (! isWeenifySpyCall(node)) return;

            // Parse the pathHash and index from the argument.
            // Look up the spy index in `options.spies`, and determine
            // whether to clear the entire block or not.
            const [ pathHash, spyIndex, xtra ] = node.arguments[0].value.split('-');
            const doRemove = xtra === 'S' || options.spyResults[pathHash][spyIndex];

            // Deal with a getter or setter which Weenify has created.
            if (xtra === 'G' || xtra === 'S') {

                // Get a reference to the property Node which contains the getter
                // or setter containing this `WEENIFY.spy('...')` call.
                const property = ancestors[ancestors.length-5];
                if (property.type !== 'Property') throw Error(
                    `weenify(): property.type is '${property.type}' not 'Property'`);
                if (xtra === 'G' && property.kind !== 'get') throw Error(
                    `weenify(): property.kind is '${property.kind}' not 'get'`);
                if (xtra === 'S' && property.kind !== 'set') throw Error(
                    `weenify(): property.kind is '${property.kind}' not 'set'`);

                if (doRemove) {

                    // Get a reference to the object Node which contains the property.
                    const object = ancestors[ancestors.length-6];
                    if (object.type !== 'ObjectExpression') throw Error(
                        `weenify(): object.type is '${object.type}' not 'ObjectExpression'`);
                    if (! Array.isArray(object.properties)) throw Error(
                        `weenify(): object.properties is '${typeof object.properties}' not an array`);

                    // Get the index of the property Node within the object.
                    let found = false;
                    let index = 0;
                    for (; index<object.properties.length; index++)
                        if (object.properties[index] === property) {
                            found = true;
                            break;
                        }
                    if (! found) throw Error(
                        `weenify(): object.properties does not contain the expected property`);

                    // Remove the property.
                    object.properties.splice(index, 1);
                } else {
                    // console.log(xtra);
                    // console.log(property.key.name);
                    // console.log(JSON.stringify(property.value.body.body[1],null,2));
                    const rtn = property.value.body.body[1];
                    property.kind = 'init';
                    if (rtn.type !== 'ReturnStatement') throw Error(
                        `weenify(): rtn.type is '${rtn.type}' not 'ReturnStatement'`);
                    property.value = rtn.argument.consequent;
                }
                return;
            }

            const ancestor_2 = ancestors[ancestors.length-2];
            const type_2 = ancestor_2?.type;

            // Deal with a `WEENIFY.spy('...')` call in a ternary conditional.
            if (type_2 === 'SequenceExpression') {

                // Check that the `WEENIFY.spy('...')` call is the 0th expression Node.
                const sequence = ancestor_2;
                if (sequence.expressions[0] !== node) throw Error(
                    `weenify(): sequence.expressions[0] is ${sequence.expressions[0].type} not node`)

                if (! doRemove) {
                    // If the block contains code which was run, just delete the
                    // CallExpression of the `WEENIFY.spy()`. If that leaves only
                    // one expression (a common situation), get rid of the brackets.
                    sequence.expressions.shift();
                    if (sequence.expressions.length === 1)
                        Object.assign(sequence, sequence.expressions[0]);
                } else {
                    // Otherwise the block contains code which was not run.
                    // Completely deleting the code would be a syntax error, so
                    // replace the code with a literal zero (just one character).
                    sequence.type = 'Literal';
                    sequence.value = '0';
                    sequence.raw = '0';
                    delete sequence.expressions; // not actually needed, but oddly satisfying
                }
                return;
            }

            // Get a reference to the block Node which contains this
            // `WEENIFY.spy('...')` call.
            const block = ancestors[ancestors.length-3];
            if (block.type !== 'BlockStatement') throw Error(
                `weenify(): block.type is '${block.type}' not 'BlockStatement'`);
            if (block.body[0].type !== 'ExpressionStatement') throw Error(
                `weenify(): block.body[0].type is '${block.body[0].type}' not 'ExpressionStatement'`);
            if (block.body[0].expression !== node) throw Error(
                `weenify(): block.body[0].expression is not the WEENIFY.spy() CallExpression`);

            // If the block contains code which was run, just delete the
            // CallExpression of the `WEENIFY.spy()` (0th Node in block.body).
            if (! doRemove) {
                block.body.shift();
                return;
            }

            // If the block is not inside a function or method, just replace
            // everything inside the block with a JavaScript comment:
            // `/* Weenified */`.
            // Note that `ancestors[ancestors.length-3].body = [];` would not
            // clear the block, because Acorn Nodes reimplement splice() etc.
            const ancestor_4 = ancestors[ancestors.length-4];
            const type_4 = ancestor_4?.type;
            if (
                type_4 !== 'FunctionExpression' &&
                type_4 !== 'ArrowFunctionExpression'
            ) {
                block.body.splice(
                    0,
                    block.body.length,
                    {
                        type: 'Literal',
                        start: 0,
                        end: 0,
                        value: '/* Weenified */',
                        raw: '/* Weenified */',
                    }
                );
                return;
            }

            // The block belongs to an unused function, which can be completely
            // removed. To figure out the array that the CallExpression is in,
            // we actually need to look several levels up the nested hierarchy.
            const ancestor_5 = ancestors[ancestors.length-5];
            const type_5 = ancestor_5?.type;
            const ancestor_6 = ancestors[ancestors.length-6];
            const type_6 = ancestor_6?.type;
            const ancestor_7 = ancestors[ancestors.length-7];

            // If ancestor_5 is the Program, remove the function from its body.
            if (type_5 === 'Program') {
                let found = false, index = 0;
                for (; index<ancestor_5.body.length; index++)
                    if (ancestor_5.body[index] === ancestor_4) {
                        found = true; break; }
                if (! found) throw Error(
                    `weenify(): Program body does not contain ancestor_4`);
                ancestor_5.body.splice(index, 1);
                return;
            }
// const name = ancestor_6.key?.name || ancestor_5.key?.name || ancestor_5.left?.property?.name || ancestor_5.id?.name || ancestor_4.key?.name || '??';
// console.log('REMOVE:', name, JSON.stringify(ancestor_5,null,2));

            let listOwner = null;
            let functionToRemove = null;

            if (type_6 === 'ExpressionStatement' || type_6 === 'VariableDeclaration') {
                listOwner = ancestor_7;
                functionToRemove = ancestor_6;
            } else {
                listOwner = ancestor_6;
                functionToRemove = ancestor_5;
            }

            const contentList = listOwner?.body || listOwner?.properties || null;
            if (! contentList || ! functionToRemove) throw Error(
                `weenify(): ancestor_6.${arrayName} (${ancestor_6.type}) is falsey: ${JSON.stringify(ancestor_6,null,2)}`);

            // Remove the function from the list owner's `body` or `properties` array.
            let found = false, index = 0;
            for (; index<contentList.length; index++)
                if (contentList[index] === functionToRemove) {
                    found = true; break; }
            if (! found) throw Error(
                `weenify(): contentList does not contain the function to remove`);
            contentList.splice(index, 1);
        }
    });

    let regenerated = generate(ast);
    if (regenerated.indexOf('WEENIFY.spy(') !== -1) {
        if (passes > 1) {
            return transform(regenerated, options, parse, passes - 1);
        } else {
            throw Error(`rollup-plugin-weenify options.passes is ${options.passes}, but still found 'WEENIFY.spy('`);
        }
    } else {
        // console.log(regenerated);
        return `${regenerated}\n\n// Weenify passes needed: ${options.passes - passes + 1}`;
    }
}

// Determines whether a Node is a `WEENIFY.spy()` call.
function isWeenifySpyCall(node) {
    return (
        node.type === 'CallExpression'
     && node.callee.object
     && node.callee.object
     && node.callee.object.name === 'WEENIFY'
     && node.callee.property.name === 'spy'
    );
}
