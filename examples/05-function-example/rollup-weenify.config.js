// Configuration used by Rollup during `npm run weenify-example-05`.

import weenify from '../../rollup-plugin-weenify.js';

const weenifyOptions = {
    spyResults: {
        'poty2u': 'e',
        'u4s4zj': 'e',
        '8syec4': 'A',
        'wz184r': '2',
        'by96i1': 'e'
    },
};

const PATH = 'examples/05-function-example/';

export default {
    input: `${PATH}build-with-spies/05-function-example.js`,
    output: {
        format: 'es',
        file: `${PATH}build/05-function-example.js`,
        plugins: [],
    },
    plugins: [
        weenify(weenifyOptions),
    ],
};
