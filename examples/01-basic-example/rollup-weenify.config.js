// Configuration used by Rollup during `npm run weenify-example-01`.

import weenify from '../../rollup-plugin-weenify.js';

const weenifyOptions = {
    extendDelete: {
        '98ojcf': [ 0,0 ]
    },
    ignore: {
        '98ojcf': [ 0 ]
    },
    remove: {
        '98ojcf': [ 1 ]
    },
};

const PATH = 'examples/01-basic-example/';

export default {
    input: `${PATH}build-with-spies/01-basic-example.js`,
    output: {
        format: 'es',
        file: `${PATH}build/01-basic-example.js`,
        plugins: [],
    },
    plugins: [
        weenify(weenifyOptions),
    ],
};
