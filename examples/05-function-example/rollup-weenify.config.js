// Configuration used by Rollup during `npm run weenify-example-05`.

import weenify from '../../rollup-plugin-weenify.js';

const weenifyOptions = {
    spyResults: {
        'poty2u': [ 0,1,0,1,0,1 ],
        'u4s4zj': [ 0,1,0,1,0,1 ],
        '8syec4': [ 0,1,0,1 ],
        'wz184r': [ 0,1 ],
        'by96i1': [ 0,1,0,1,0,1 ]
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
