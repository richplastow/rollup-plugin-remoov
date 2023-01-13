// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.numSpies = W.numSpies || {};
W.numSpies['3l5xms'] = 3;
W.spyResults = W.spyResults || {};
W.spyResults['3l5xms'] = [];
W.spyCalls = W.spyCalls || {};
W.spyCalls['3l5xms'] = new Set();
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

function ifsNestedBasic(redBlue, greenYellow) {
  if (redBlue === 'RED') {
    WEENIFY.spy('3l5xms-2');
    console.log('1st IfStatement consequent outer block - will be used.');
    if (greenYellow === 'GREEN') {
      WEENIFY.spy('3l5xms-0');
      return 'greenYellow is GREEN';
    } else {
      WEENIFY.spy('3l5xms-1');
      return 'greenYellow is not GREEN';
    }
  }
}

ifsNestedBasic('RED', 'GREEN');
