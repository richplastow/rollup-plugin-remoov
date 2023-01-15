// Configuration used by Rollup during `npm run weenify-example-03`.

import weenify from '../../rollup-plugin-weenify.js';

const weenifyOptions = {
    spyResults: {
        't5mm7v': [ 0,1,1,0,0,0,0 ]
    },
};

const PATH = 'examples/03-switch-ternary-example/';

export default {
    input: `${PATH}build-with-spies/03-switch-ternary-example.js`,
    output: {
        format: 'es',
        file: `${PATH}build/03-switch-ternary-example.js`,
        plugins: [],
    },
    plugins: [
        weenify(weenifyOptions),
    ],
};
