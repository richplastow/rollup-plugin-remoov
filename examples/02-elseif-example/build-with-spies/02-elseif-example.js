// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.numSpies = W.numSpies || {};
W.numSpies['6bcklh'] = 6;
W.spyResults = W.spyResults || {};
W.spyResults['6bcklh'] = [];
W.spyCalls = W.spyCalls || {};
W.spyCalls['6bcklh'] = new Set();
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
    setTimeout(() => W.scan(), 0.1);
    W.didPrepScanCall = true;
}
}(); // end iife
// END_WEENIFY_BOILERPLATE

function ifElseIfElseWithBlocks(redBlue) {
  if (redBlue === 'RED') {
    WEENIFY.spy('6bcklh-2');
    console.log('1st IfStatement consequent block - will be used.');
  } else if (redBlue === 'YELLOW') {
    WEENIFY.spy('6bcklh-0');
    console.log('1st IfStatement middle block - is never actually used.');
  } else {
    WEENIFY.spy('6bcklh-1');
    console.log('1st IfStatement alternate block - also never used.');
  }
}
function ifElseIfElseWithoutBlocks(redBlue) {
  if (redBlue === 'BLUE') {
    WEENIFY.spy('6bcklh-5');
    console.log('2nd IfStatement consequent NOT a block - is never actually used.');
  } else if (redBlue === 'YELLOW') {
    WEENIFY.spy('6bcklh-3');
    console.log('2nd IfStatement middle NOT a block - also never used.');
  } else {
    WEENIFY.spy('6bcklh-4');
    console.log('2nd IfStatement alternate NOT a block - will be used.');
  }
}

function basicExample(redBlue) {
  ifElseIfElseWithBlocks(redBlue);
  ifElseIfElseWithoutBlocks(redBlue);
}
basicExample('RED');
