// Configuration used by Rollup during `npm run add-spies-to-example-02`.
//
// Adds Weenify boilerplate code, and adds calls like `weenySpy('B-gh9kl-7');`.
// After your app has run, call `WEENIFY.scan()` to log the `weenifyOptions`.
// Then pass `weenifyOptions` into `removeUnused()`, in 'rollup-weenify.config.js'.

import addSpies from '../../rollup-plugin-weenify-add-spies.js';

const PATH = 'examples/02-if-example/';

export default {
    input: `${PATH}src/02-main.js`,
    output: {
        format: 'es',
        file: `${PATH}build-with-spies/02-if-example.js`,
        plugins: [],
    },
    plugins: [addSpies({
        callScan: 0.1, // adds `setTimeout(() => WEENIFY.scan(), 0.1);`
    })],
};
