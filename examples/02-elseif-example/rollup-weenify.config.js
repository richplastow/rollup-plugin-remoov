// Configuration used by Rollup during `npm run weenify-example-02`.

import weenify from '../../rollup-plugin-weenify.js';

const weenifyOptions = {
    extendDelete: {
        '6bcklh': [ 0,0,0,0,0,0 ]
    },
    ignore: {
        '6bcklh': [ 2,4 ]
    },
    remove: {
        '6bcklh': [ 0,1,3,5 ]
    },
};

const PATH = 'examples/02-elseif-example/';

export default {
    input: `${PATH}build-with-spies/02-elseif-example.js`,
    output: {
        format: 'es',
        file: `${PATH}build/02-elseif-example.js`,
        plugins: [],
    },
    plugins: [
        weenify(weenifyOptions),
    ],
};
