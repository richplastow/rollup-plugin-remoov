// Configuration used by Rollup during `npm run weenify-example-03`.

import weenify from '../../rollup-plugin-weenify.js';

const weenifyOptions = {
    spyResults: {
        '5wfsj7': [ 0,1 ],
        'lskjtx': [ 0,1 ],
        'osglam': [ 1,0 ],
        'hcrhqe': [ 1,0 ],
        'cvjz65': [ 0,1,0 ]
    },
};

const PATH = 'examples/03-if-misc-example/';

export default {
    input: `${PATH}build-with-spies/03-if-misc-example.js`,
    output: {
        format: 'es',
        file: `${PATH}build/03-if-misc-example.js`,
        plugins: [],
    },
    plugins: [
        weenify(weenifyOptions),
    ],
};
