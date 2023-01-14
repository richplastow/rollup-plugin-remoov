// Configuration used by Rollup during `npm run weenify-example-02`.

import weenify from '../../rollup-plugin-weenify.js';

const weenifyOptions = {
    spyResults: {
        '6bcklh': [ 1,1,0,0,1,0,1,0 ],
        '4iv985': [ 0 ]
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
