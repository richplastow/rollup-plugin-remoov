// Configuration used by Rollup during `npm run weenify-example-06`.

import weenify from '../../rollup-plugin-weenify.js';

const weenifyOptions = {
    spyResults: {
        '4lvt61': [ 0,0,1 ],
        'crddw8': [ 0,0,0,0,0,1 ]
    },
};

const PATH = 'examples/06-object-property-example/';

export default {
    input: `${PATH}build-with-spies/06-object-property-example.js`,
    output: {
        format: 'es',
        file: `${PATH}build/06-object-property-example.js`,
        plugins: [],
    },
    plugins: [
        weenify(weenifyOptions),
    ],
};
