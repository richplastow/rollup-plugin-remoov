// Configuration used by Rollup during `npm run weenify-example-04`.

import weenify from '../../rollup-plugin-weenify.js';

const weenifyOptions = {
    spyResults: {
        '3l5xms': [ 0,1,0 ]
    },
};

const PATH = 'examples/04-edge-cases-example/';

export default {
    input: `${PATH}build-with-spies/04-edge-cases-example.js`,
    output: {
        format: 'es',
        file: `${PATH}build/04-edge-cases-example.js`,
        plugins: [],
    },
    plugins: [
        weenify(weenifyOptions),
    ],
};
