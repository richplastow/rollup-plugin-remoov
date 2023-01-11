// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.pathHashes = W.pathHashes || [];
W.pathHashes.push('3l5xms');
W.begin = W.begin || {};
W.begin['3l5xms'] = new Set();
W.end = W.end || {};
W.end['3l5xms'] = new Set();
W.errors = W.errors || [];
W.ignore = W.ignore || {};
W.ignore['3l5xms'] = [];
W.remove = W.remove || {};
W.remove['3l5xms'] = [];
W.extendDelete = W.extendDelete || {};
W.extendDelete['3l5xms'] = [ 30,34,0 ];
W.spy = W.spy || function weenifySpy(id) {
    const [ place, pathHash, index, _extendDelete ] = id.split('-');
    if (place === 'B')
        W.begin[pathHash].add(+index);
    else // place === 'E'
        W.end[pathHash].add(+index);
};
W.scan = W.scan || function weenifyScan() {
    for (const pathHash of W.pathHashes) {
        for (let i=0; i<W.extendDelete[pathHash].length; i++) {
            const didBegin = W.begin[pathHash].has(i);
            const didEnd = W.end[pathHash].has(i);
            if (!didBegin && !didEnd) {
                W.remove[pathHash].push(i);
            } else if (didBegin && didEnd) {
                W.ignore[pathHash].push(i);
            } else {
                W.errors.push(`Mismatch ${pathHash} ${i}`);
                W.ignore[pathHash].push(i);
            }
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
    setTimeout(() => W.scan(), 10);
    W.didPrepScanCall = true;
}
}(); // end iife
// END_WEENIFY_BOILERPLATE

function ifsNestedBasic(redBlue, greenYellow) {
  if (redBlue === 'RED') {
    WEENIFY.spy('B-3l5xms-2-0');
    console.log('1st IfStatement consequent outer block - will be used.');
    if (greenYellow === 'GREEN') {
      WEENIFY.spy('B-3l5xms-0-30');
      WEENIFY.spy('E-3l5xms-0-30');
      return 'greenYellow is GREEN';
    } else {
      WEENIFY.spy('B-3l5xms-1-34');
      WEENIFY.spy('E-3l5xms-1-34');
      return 'greenYellow is not GREEN';
    }
  }
}

ifsNestedBasic('RED', 'GREEN');
