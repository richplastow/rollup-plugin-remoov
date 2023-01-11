// Configuration used by Rollup during `npm run weenify-example-03`.

import weenify from '../../rollup-plugin-weenify.js';

const weenifyOptions = {
    extendDelete: {
        'xxpl6f': [ 6,6 ],
        'txp2sf': [ 9,9 ],
        'tikgdy': [ 24,28 ],
        'aoiawu': [ 30,34 ]
    },
    ignore: {
        'xxpl6f': [ 0 ],
        'txp2sf': [ 0 ],
        'tikgdy': [ 1 ],
        'aoiawu': [ 1 ]
    },
    remove: {
        'xxpl6f': [ 1 ],
        'txp2sf': [ 1 ],
        'tikgdy': [ 0 ],
        'aoiawu': [ 0 ]
    },
};

const PATH = 'examples/03-if-return-example/';

export default {
    input: `${PATH}build-with-spies/03-if-return-example.js`,
    output: {
        format: 'es',
        file: `${PATH}build/03-if-return-example.js`,
        plugins: [],
    },
    plugins: [
        weenify(weenifyOptions),
    ],
};
