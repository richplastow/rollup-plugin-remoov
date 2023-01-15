// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.numSpies = W.numSpies || {};
W.numSpies['poty2u'] = 6;
W.spyResults = W.spyResults || {};
W.spyResults['poty2u'] = [];
W.spyCalls = W.spyCalls || {};
W.spyCalls['poty2u'] = new Set();
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

class ClassMethodInstance {
  classMethodInstanceClassicCalled(doCallSecond) {
    WEENIFY.spy('poty2u-0');
    console.log('First instance classic method will be used.');
    return doCallSecond && this.classMethodInstanceClassicNotCalled();
  }
  classMethodInstanceClassicNotCalled() {
    WEENIFY.spy('poty2u-1');
    console.log('Second instance classic method will not be used.');
  }
  classMethodInstanceArrowBlockCalled = doCallSecond => {
    WEENIFY.spy('poty2u-2');
    console.log('First instance arrow block method will be used.');
    return doCallSecond && this.classMethodInstanceArrowBlockNotCalled();
  };
  classMethodInstanceArrowBlockNotCalled = () => {
    WEENIFY.spy('poty2u-3');
    console.log('Second instance arrow block method will not be used.');
  };
  classMethodInstanceArrowNoBlockCalled = doCallSecond => {
    WEENIFY.spy('poty2u-4');
    console.log('First instance arrow no block method will be used.') || doCallSecond && this.classMethodInstanceArrowNoBlockNotCalled();
  };
  classMethodInstanceArrowNoBlockNotCalled = () => {
    WEENIFY.spy('poty2u-5');
    console.log('Second instance arrow no block method will not be used.');
  };
}

// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.numSpies = W.numSpies || {};
W.numSpies['u4s4zj'] = 6;
W.spyResults = W.spyResults || {};
W.spyResults['u4s4zj'] = [];
W.spyCalls = W.spyCalls || {};
W.spyCalls['u4s4zj'] = new Set();
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

class ClassMethodStatic {
  static classMethodStaticClassicCalled(doCallSecond) {
    WEENIFY.spy('u4s4zj-0');
    console.log('First static classic method will be used.');
    return doCallSecond && ClassMethodStatic.classMethodStaticClassicNotCalled();
  }
  static classMethodStaticClassicNotCalled() {
    WEENIFY.spy('u4s4zj-1');
    console.log('Second static classic method will not be used.');
  }
}
ClassMethodStatic.classMethodStaticArrowBlockCalled = doCallSecond => {
  WEENIFY.spy('u4s4zj-2');
  console.log('First static arrow block method will be used.');
  return doCallSecond && ClassMethodStatic.classMethodStaticArrowBlockNotCalled();
};
ClassMethodStatic.classMethodStaticArrowBlockNotCalled = () => {
  WEENIFY.spy('u4s4zj-3');
  console.log('Second static arrow block method will not be used.');
};
ClassMethodStatic.classMethodStaticArrowNoBlockCalled = doCallSecond => {
  WEENIFY.spy('u4s4zj-4');
  console.log('First static arrow no block method will be used.') || doCallSecond && ClassMethodStatic.classMethodStaticArrowNoBlockNotCalled();
};
ClassMethodStatic.classMethodStaticArrowNoBlockNotCalled = () => {
  WEENIFY.spy('u4s4zj-5');
  console.log('Second static arrow no block method will not be used.');
};

// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.numSpies = W.numSpies || {};
W.numSpies['8syec4'] = 4;
W.spyResults = W.spyResults || {};
W.spyResults['8syec4'] = [];
W.spyCalls = W.spyCalls || {};
W.spyCalls['8syec4'] = new Set();
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

const functionArrowBlockCalled = doCallSecond => {
  WEENIFY.spy('8syec4-0');
  console.log('First arrow block function will be used.');
  return doCallSecond && functionArrowBlockNotCalled();
};
const functionArrowBlockNotCalled = () => {
  WEENIFY.spy('8syec4-1');
  console.log('Second arrow block function will not be used.');
};
const functionArrowNoBlockCalled = doCallSecond => {
  WEENIFY.spy('8syec4-2');
  console.log('First arrow no-block function will be used.') || doCallSecond && functionArrowNoBlockNotCalled();
};
const functionArrowNoBlockNotCalled = () => {
  WEENIFY.spy('8syec4-3');
  console.log('Second arrow no-block function will not be used.');
};

// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.numSpies = W.numSpies || {};
W.numSpies['wz184r'] = 2;
W.spyResults = W.spyResults || {};
W.spyResults['wz184r'] = [];
W.spyCalls = W.spyCalls || {};
W.spyCalls['wz184r'] = new Set();
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

function functionClassicCalled(doCallSecond) {
  WEENIFY.spy('wz184r-0');
  console.log('First classic function will be used.');
  return doCallSecond && functionClassicNotCalled();
}
function functionClassicNotCalled() {
  WEENIFY.spy('wz184r-1');
  console.log('Second classic function will not be used.');
}

// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.numSpies = W.numSpies || {};
W.numSpies['by96i1'] = 6;
W.spyResults = W.spyResults || {};
W.spyResults['by96i1'] = [];
W.spyCalls = W.spyCalls || {};
W.spyCalls['by96i1'] = new Set();
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

const objectMethod = {
  objectMethodClassicCalled(doCallSecond) {
    WEENIFY.spy('by96i1-0');
    console.log('First instance classic object method will be used.');
    return doCallSecond && objectMethod.objectMethodClassicNotCalled();
  },
  objectMethodClassicNotCalled() {
    WEENIFY.spy('by96i1-1');
    console.log('Second instance classic object method will not be used.');
  },
  objectMethodArrowBlockCalled: doCallSecond => {
    WEENIFY.spy('by96i1-2');
    console.log('First instance arrow block object method will be used.');
    return doCallSecond && objectMethod.objectMethodArrowBlockNotCalled();
  },
  objectMethodArrowBlockNotCalled: () => {
    WEENIFY.spy('by96i1-3');
    console.log('Second instance arrow block object method will not be used.');
  },
  objectMethodArrowNoBlockCalled: doCallSecond => {
    WEENIFY.spy('by96i1-4');
    console.log('First instance arrow no block object method will be used.') || doCallSecond && objectMethod.objectMethodArrowNoBlockNotCalled();
  },
  objectMethodArrowNoBlockNotCalled: () => {
    WEENIFY.spy('by96i1-5');
    console.log('Second instance arrow no block object method will not be used.');
  }
};

const doCallSecond = false;
const instance = new ClassMethodInstance();
instance.classMethodInstanceArrowBlockCalled(doCallSecond);
instance.classMethodInstanceArrowNoBlockCalled(doCallSecond);
instance.classMethodInstanceClassicCalled(doCallSecond);
ClassMethodStatic.classMethodStaticArrowBlockCalled(doCallSecond);
ClassMethodStatic.classMethodStaticArrowNoBlockCalled(doCallSecond);
ClassMethodStatic.classMethodStaticClassicCalled(doCallSecond);
functionArrowBlockCalled(doCallSecond);
functionArrowNoBlockCalled(doCallSecond);
functionClassicCalled(doCallSecond);
objectMethod.objectMethodArrowBlockCalled(doCallSecond);
objectMethod.objectMethodArrowNoBlockCalled(doCallSecond);
objectMethod.objectMethodClassicCalled(doCallSecond);
