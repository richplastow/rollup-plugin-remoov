// Configuration used by Rollup during `npm run weenify-example-04`.

import weenify from '../../rollup-plugin-weenify.js';

const weenifyOptions = {
    spyResults: {
        '8tdzor': 'C',
        '4s0u2m': 'C',
        '4ov6eo': 'C',
        'clx9pq': 'C',
        'yzze0g': '0'
    },
};

const PATH = 'examples/04-loops-example/';

export default {
    input: `${PATH}build-with-spies/04-loops-example.js`,
    output: {
        format: 'es',
        file: `${PATH}build/04-loops-example.js`,
        plugins: [],
    },
    plugins: [
        weenify(weenifyOptions),
    ],
};
