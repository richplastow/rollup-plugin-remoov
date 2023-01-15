// Configuration used by Rollup during `npm run weenify-example-02`.

import weenify from '../../rollup-plugin-weenify.js';

const weenifyOptions = {
    spyResults: {
        'pwcwmq': [ 0,1,0,0 ],
        'vslhq2': [ 0,1,0,0 ],
        'xp46qw': [ 1,1,0,0,1,0,1,0 ],
        'rqlsfe': [ 0,1,0,0 ],
        '5fymjz': [ 1,0,0 ],
        '2n5md5': [ 1,0,0 ],
        'b7p544': [ 0 ]
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
