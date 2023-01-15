// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.numSpies = W.numSpies || {};
W.numSpies['t5mm7v'] = 7;
W.spyResults = W.spyResults || {};
W.spyResults['t5mm7v'] = [];
W.spyCalls = W.spyCalls || {};
W.spyCalls['t5mm7v'] = new Set();
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
}(); // end iife // END_WEENIFY_BOILERPLATE

function switchBasic(redBlue) {
  WEENIFY.spy('t5mm7v-6');
  switch (redBlue) {
    case 'RED':
      {
        WEENIFY.spy('t5mm7v-0');
        console.log('1 of 4: 03-switch-basic: SwitchCase block and break - will be used.');
        break;
      }
    case 'BLUE':
      {
        WEENIFY.spy('t5mm7v-1');
        console.log('03-switch-basic: SwitchCase block and break - never actually used.');
        break;
      }
    default:
      {
        WEENIFY.spy('t5mm7v-2');
        console.log('03-switch-basic: Default SwitchCase block - never actually used.');
      }
  }
  switch (redBlue) {
    case 'RED':
      {
        WEENIFY.spy('t5mm7v-3');
        console.log('2 of 4: 03-switch-basic: SwitchCase no-block, no-break - will be used.');
      }
    case 'BLUE':
      {
        WEENIFY.spy('t5mm7v-4');
        console.log('3 of 4: 03-switch-basic: SwitchCase no-block, no-break - is also used, because `case` line 14 has no `break`.');
      }
    default:
      {
        WEENIFY.spy('t5mm7v-5');
        console.log('4 of 4: 03-switch-basic: Default SwitchCase no-block - is also used, because `case` line 14 has no `break`.');
      }
  }
}

switchBasic('RED');
