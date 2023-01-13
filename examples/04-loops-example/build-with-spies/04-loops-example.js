// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.numSpies = W.numSpies || {};
W.numSpies['clx9pq'] = 4;
W.spyResults = W.spyResults || {};
W.spyResults['clx9pq'] = [];
W.spyCalls = W.spyCalls || {};
W.spyCalls['clx9pq'] = new Set();
W.spy = W.spy || function weenifySpy(id) {
    const [ pathHash, index ] = id.split('-');
        W.spyCalls[pathHash].add(+index);
};
W.scan = W.scan || function weenifyScan() {
    for (const pathHash in W.spyCalls) {
        for (let i=0; i<W.numSpies[pathHash]; i++) {
            W.spyResults[pathHash].push(
                W.spyCalls[pathHash].has(i) ? 0 : 1
            );
        }
    }
    let spyResultsLists = [];
    for (const pathHash in W.spyCalls) {
        spyResultsLists.push(`        '${pathHash}': [ ${W.spyResults[pathHash].join()} ]`);
    }
    console.log(
        'const weenifyOptions = {\n' +
        '    spyResults: {\n' +
        spyResultsLists.join(',\n') +
        '\n    },\n' +
        '};'
    );
};
if (! W.didPrepScanCall) {
    setTimeout(() => W.scan(), 10);
    W.didPrepScanCall = true;
}
}(); // end iife
// END_WEENIFY_BOILERPLATE

function loopsWhile(a, b) {
  while (a) {
    WEENIFY.spy('clx9pq-0');
    console.log('First and second while blocks will both be used.');
    break;
  }
  while (a) {
    WEENIFY.spy('clx9pq-1');
    break;
  }
  while (b) {
    WEENIFY.spy('clx9pq-2');
    console.log('Third and fourth while blocks are never actually used.');
    break;
  }
  while (b) {
    WEENIFY.spy('clx9pq-3');
    break;
  }
}

loopsWhile(true, false);
