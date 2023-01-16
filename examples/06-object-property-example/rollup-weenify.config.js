// Configuration used by Rollup during `npm run weenify-example-06`.

import weenify from '../../rollup-plugin-weenify.js';

const weenifyOptions = {
    spyResults: {
        '4lvt61': '4',
        'crddw8': '02'
    },
};

const PATH = 'examples/06-object-property-example/';

export default {
    input: `${PATH}build-with-spies/06-object-property-example.js`,
    output: {
        format: 'es',
        file: `${PATH}build/06-object-property-example.js`,
        plugins: [],
    },
    plugins: [
        weenify(weenifyOptions),
    ],
};
