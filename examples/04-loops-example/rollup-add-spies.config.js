// Configuration used by Rollup during `npm run add-spies-to-example-04`.
//
// Adds Weenify boilerplate code, and adds calls like `weenySpy('B-gh9kl-7');`.
// After your app has run, call `WEENIFY.scan()` to log the `weenifyOptions`.
// Then pass `weenifyOptions` into `weenify()`, in 'rollup-weenify.config.js'.

import addSpies from '../../rollup-plugin-weenify-add-spies.js';

const PATH = 'examples/04-loops-example/';

export default {
    input: `${PATH}src/04-main.js`,
    output: {
        format: 'es',
        file: `${PATH}build-with-spies/04-loops-example.js`,
        plugins: [],
    },
    plugins: [addSpies({
        callScan: 10, // call WEENIFY.scan(), and do it after 10 milliseconds
    })],
};
