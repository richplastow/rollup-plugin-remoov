// Configuration used by Rollup during `npm run weenify-example-02`.

import weenify from '../../rollup-plugin-weenify.js';

const weenifyOptions = {
    spyResults: {
        'pwcwmq': '2',
        'vslhq2': '2',
        'xp46qw': 'J1',
        'rqlsfe': '2',
        '5fymjz': '1',
        '2n5md5': '1',
        'b7p544': '0'
    },
};

const PATH = 'examples/02-if-example/';

export default {
    input: `${PATH}build-with-spies/02-if-example.js`,
    output: {
        format: 'es',
        file: `${PATH}build/02-if-example.js`,
        plugins: [],
    },
    plugins: [
        weenify(weenifyOptions),
    ],
};
