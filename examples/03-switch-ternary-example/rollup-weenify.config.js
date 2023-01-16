// Configuration used by Rollup during `npm run weenify-example-03`.

import weenify from '../../rollup-plugin-weenify.js';

const weenifyOptions = {
    spyResults: {
        't5mm7v': 'E0',
        'xnl6y0': '6',
        '2wjor3': 'R0'
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
