// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.pathHashes = W.pathHashes || [];
W.pathHashes.push('6bcklh');
W.begin = W.begin || {};
W.begin['6bcklh'] = new Set();
W.end = W.end || {};
W.end['6bcklh'] = new Set();
W.errors = W.errors || [];
W.ignore = W.ignore || {};
W.ignore['6bcklh'] = [];
W.remove = W.remove || {};
W.remove['6bcklh'] = [];
W.extendDelete = W.extendDelete || {};
W.extendDelete['6bcklh'] = [ 0,0,0,0,0,0 ];
W.spy = W.spy || function weenifySpy(id) {
    const [ place, pathHash, index, _extendDelete ] = id.split('-');
    if (place === 'B')
        W.begin[pathHash].add(+index);
    else // place === 'E'
        W.end[pathHash].add(+index);
};
W.scan = W.scan || function weenifyScan() {
    for (const pathHash of W.pathHashes) {
        console.log(222, W.pathHashes, W.remove, 6);
        for (let i=0; i<6; i++) {
            const didBegin = W.begin[pathHash].has(i);
            const didEnd = W.end[pathHash].has(i);
            if (!didBegin && !didEnd)
                W.remove[pathHash].push(i);
            else if (didBegin && didEnd)
                W.ignore[pathHash].push(i);
            else
                W.errors.push(`Mismatch ${pathHash} ${i}`);
        }
    }
    let ignoreLists = [];
    let removeLists = [];
    let extdltLists = [];
    for (const pH of W.pathHashes) {
        ignoreLists.push(`        '${pH}': [ ${W.ignore[pH].join()} ]`);
        removeLists.push(`        '${pH}': [ ${W.remove[pH].join()} ]`);
        extdltLists.push(`        '${pH}': [ ${W.extendDelete[pH].join()} ]`);
    }
    console.log(
        'const weenifyOptions = {\n' +
        '    extendDelete: {\n' +
        extdltLists.join(',\n') +
        '\n    },\n' +
        '    ignore: {\n' +
        ignoreLists.join(',\n') +
        '\n    },\n' +
        '    remove: {\n' +
        removeLists.join(',\n') +
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
    WEENIFY.spy('B-6bcklh-2-0');
    console.log('1st IfStatement consequent block - will be used.');
    WEENIFY.spy('E-6bcklh-2-0');
  } else if (redBlue === 'YELLOW') {
    WEENIFY.spy('B-6bcklh-0-0');
    console.log('1st IfStatement middle block - is never actually used.');
    WEENIFY.spy('E-6bcklh-0-0');
  } else {
    WEENIFY.spy('B-6bcklh-1-0');
    console.log('1st IfStatement alternate block - also never used.');
    WEENIFY.spy('E-6bcklh-1-0');
  }
}
function ifElseIfElseWithoutBlocks(redBlue) {
  if (redBlue === 'BLUE') {
    WEENIFY.spy('B-6bcklh-5-0');
    console.log('2nd IfStatement consequent NOT a block - is never actually used.');
    WEENIFY.spy('E-6bcklh-5-0');
  } else if (redBlue === 'YELLOW') {
    WEENIFY.spy('B-6bcklh-3-0');
    console.log('2nd IfStatement middle NOT a block - also never used.');
    WEENIFY.spy('E-6bcklh-3-0');
  } else {
    WEENIFY.spy('B-6bcklh-4-0');
    console.log('2nd IfStatement alternate NOT a block - will be used.');
    WEENIFY.spy('E-6bcklh-4-0');
  }
}

function basicExample(redBlue) {
  ifElseIfElseWithBlocks(redBlue);
  ifElseIfElseWithoutBlocks(redBlue);
}
basicExample('RED');
