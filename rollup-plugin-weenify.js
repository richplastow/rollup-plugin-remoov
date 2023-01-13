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
            // `+` casts index to a number
            // `!!` casts `options.spies[+index]` to a boolean
            const [ pathHash, spyIndex ] = node.arguments[0].value.split('-');
            const clearBlock = options.spyResults[pathHash][spyIndex];

            // Get a handy reference to the block Node which contains
            // this `WEENIFY.spy('...')` call.
            // Note that `ancestors[ancestors.length-3].body = [];` would
            // not work, because Acorn Nodes reimplement splice() etc.
            const blockBody = ancestors[ancestors.length-3].body;

            if (clearBlock) {
                // Replace everything inside the block with a JavaScript
                // comment, `/* Weenified */`.
                blockBody.splice(
                    0,
                    blockBody.length,
                    {
                        type: 'Literal',
                        start: 0,
                        end: 0,
                        value: '/* Weenified */',
                        raw: `/* Weenified */`,
                    }
                );
            } else {
                // Just delete the `WEENIFY.spy('...')` call, which should
                // always by the first Node in blockBody.
                blockBody.shift();
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
