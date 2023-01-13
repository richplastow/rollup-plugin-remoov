// Configuration used by Rollup during `npm run weenify-example-03`.

import weenify from '../../rollup-plugin-weenify.js';

const weenifyOptions = {
    spyResults: {
        'xxpl6f': [ 0,1 ],
        'txp2sf': [ 0,1 ],
        'tikgdy': [ 1,0 ],
        'aoiawu': [ 1,0 ]
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
