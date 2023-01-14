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

            // Get a reference to the block Node which contains this
            // `WEENIFY.spy('...')` call.
            const block = ancestors[ancestors.length-3];

            if (doRemove) {
                // Replace everything inside the block with a JavaScript
                // comment, `/* Weenified */`.
                // Note that `ancestors[ancestors.length-3].body = [];` would
                // clear the block, because Acorn Nodes reimplement splice() etc.
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
            } else {
                // Just delete the `WEENIFY.spy('...')` call, which should
                // always by the first Node in block.body.
                block.body.shift();
            }
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
