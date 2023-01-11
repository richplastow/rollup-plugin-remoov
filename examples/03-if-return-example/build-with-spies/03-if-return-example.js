// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.pathHashes = W.pathHashes || [];
W.pathHashes.push('xxpl6f');
W.begin = W.begin || {};
W.begin['xxpl6f'] = new Set();
W.end = W.end || {};
W.end['xxpl6f'] = new Set();
W.errors = W.errors || [];
W.ignore = W.ignore || {};
W.ignore['xxpl6f'] = [];
W.remove = W.remove || {};
W.remove['xxpl6f'] = [];
W.extendDelete = W.extendDelete || {};
W.extendDelete['xxpl6f'] = [ 6,6 ];
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
    setTimeout(() => W.scan(), 10);
    W.didPrepScanCall = true;
}
}(); // end iife
// END_WEENIFY_BOILERPLATE

function ifBreak(redBlue) {
  while (true) {
    if (redBlue === 'RED') {
      WEENIFY.spy('B-xxpl6f-0-6');
      console.log('1st IfStatement consequent block - will be used.');
      WEENIFY.spy('E-xxpl6f-0-6');
      break;
    } else {
      WEENIFY.spy('B-xxpl6f-1-6');
      console.log('1st IfStatement middle block - is never actually used.');
      WEENIFY.spy('E-xxpl6f-1-6');
      break;
    }
  }
}

// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.pathHashes = W.pathHashes || [];
W.pathHashes.push('txp2sf');
W.begin = W.begin || {};
W.begin['txp2sf'] = new Set();
W.end = W.end || {};
W.end['txp2sf'] = new Set();
W.errors = W.errors || [];
W.ignore = W.ignore || {};
W.ignore['txp2sf'] = [];
W.remove = W.remove || {};
W.remove['txp2sf'] = [];
W.extendDelete = W.extendDelete || {};
W.extendDelete['txp2sf'] = [ 9,9 ];
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
    setTimeout(() => W.scan(), 10);
    W.didPrepScanCall = true;
}
}(); // end iife
// END_WEENIFY_BOILERPLATE

function ifContinue(redBlue) {
  let doLoop = true;
  while (doLoop) {
    if (redBlue === 'RED') {
      WEENIFY.spy('B-txp2sf-0-9');
      console.log('1st IfStatement consequent block - will be used.');
      doLoop = false;
      WEENIFY.spy('E-txp2sf-0-9');
      continue;
    } else {
      WEENIFY.spy('B-txp2sf-1-9');
      console.log('1st IfStatement middle block - is never actually used.');
      doLoop = false;
      WEENIFY.spy('E-txp2sf-1-9');
      continue;
    }
  }
}

// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.pathHashes = W.pathHashes || [];
W.pathHashes.push('tikgdy');
W.begin = W.begin || {};
W.begin['tikgdy'] = new Set();
W.end = W.end || {};
W.end['tikgdy'] = new Set();
W.errors = W.errors || [];
W.ignore = W.ignore || {};
W.ignore['tikgdy'] = [];
W.remove = W.remove || {};
W.remove['tikgdy'] = [];
W.extendDelete = W.extendDelete || {};
W.extendDelete['tikgdy'] = [ 24,28 ];
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
    setTimeout(() => W.scan(), 10);
    W.didPrepScanCall = true;
}
}(); // end iife
// END_WEENIFY_BOILERPLATE

function ifReturn(redBlue) {
  if (redBlue === 'RED') {
    WEENIFY.spy('B-tikgdy-0-24');
    console.log('1st IfStatement consequent block - is never actually used.');
    WEENIFY.spy('E-tikgdy-0-24');
    return 'redBlue is RED';
  } else {
    WEENIFY.spy('B-tikgdy-1-28');
    console.log('1st IfStatement alternate block - will be used.');
    WEENIFY.spy('E-tikgdy-1-28');
    return 'redBlue is not RED';
  }
}

// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.pathHashes = W.pathHashes || [];
W.pathHashes.push('aoiawu');
W.begin = W.begin || {};
W.begin['aoiawu'] = new Set();
W.end = W.end || {};
W.end['aoiawu'] = new Set();
W.errors = W.errors || [];
W.ignore = W.ignore || {};
W.ignore['aoiawu'] = [];
W.remove = W.remove || {};
W.remove['aoiawu'] = [];
W.extendDelete = W.extendDelete || {};
W.extendDelete['aoiawu'] = [ 30,34 ];
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
    setTimeout(() => W.scan(), 10);
    W.didPrepScanCall = true;
}
}(); // end iife
// END_WEENIFY_BOILERPLATE

function ifThrow(redBlue) {
  if (redBlue === 'RED') {
    WEENIFY.spy('B-aoiawu-0-30');
    console.log('1st IfStatement consequent block - is never actually used.');
    WEENIFY.spy('E-aoiawu-0-30');
    throw Error('redBlue is RED');
  } else {
    WEENIFY.spy('B-aoiawu-1-34');
    console.log('1st IfStatement alternate block - will be used.');
    WEENIFY.spy('E-aoiawu-1-34');
    throw Error('redBlue is not RED');
  }
}

ifBreak('RED');
ifContinue('RED');
ifReturn('BLUE');
try {
  ifThrow('BLUE');
} catch (e) {}
