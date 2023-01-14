// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.numSpies = W.numSpies || {};
W.numSpies['4lvt61'] = 3;
W.spyResults = W.spyResults || {};
W.spyResults['4lvt61'] = [];
W.spyCalls = W.spyCalls || {};
W.spyCalls['4lvt61'] = new Set();
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

const propertyGet = {
  get used() {
    WEENIFY.spy('4lvt61-1-G');
    return typeof this.__WEENIFY__used === 'undefined' ? 'yep' : this.__WEENIFY__used;
  },
  set used(val) {
    WEENIFY.spy('4lvt61-1-S');
    this.__WEENIFY__used = val;
  },
  get notUsed() {
    WEENIFY.spy('4lvt61-2-G');
    return typeof this.__WEENIFY__notUsed === 'undefined' ? null : this.__WEENIFY__notUsed;
  },
  set notUsed(val) {
    WEENIFY.spy('4lvt61-2-S');
    this.__WEENIFY__notUsed = val;
  },
  get already() {
    WEENIFY.spy('4lvt61-0');
    return 'was already a getter, so should remain so';
  }
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
W.numSpies['crddw8'] = 6;
W.spyResults = W.spyResults || {};
W.spyResults['crddw8'] = [];
W.spyCalls = W.spyCalls || {};
W.spyCalls['crddw8'] = new Set();
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

const propertyGetAndSet = {
  get onlyGet() {
    WEENIFY.spy('crddw8-2-G');
    return typeof this.__WEENIFY__onlyGet === 'undefined' ? 'this will only be getted' : this.__WEENIFY__onlyGet;
  },
  set onlyGet(val) {
    WEENIFY.spy('crddw8-2-S');
    this.__WEENIFY__onlyGet = val;
  },
  get onlySet() {
    WEENIFY.spy('crddw8-3-G');
    return typeof this.__WEENIFY__onlySet === 'undefined' ? 'this will only be setted' : this.__WEENIFY__onlySet;
  },
  set onlySet(val) {
    WEENIFY.spy('crddw8-3-S');
    this.__WEENIFY__onlySet = val;
  },
  get 'getAndSet'() {
    WEENIFY.spy('crddw8-4-G');
    return typeof this.__WEENIFY__getAndSet === 'undefined' ? 'this will be setted and getted' : this.__WEENIFY__getAndSet;
  },
  set 'getAndSet'(val) {
    WEENIFY.spy('crddw8-4-S');
    this.__WEENIFY__getAndSet = val;
  },
  get notGetOrSet() {
    WEENIFY.spy('crddw8-5-G');
    return typeof this.__WEENIFY__notGetOrSet === 'undefined' ? 'this will not be getted or setted - so will be removed' : this.__WEENIFY__notGetOrSet;
  },
  set notGetOrSet(val) {
    WEENIFY.spy('crddw8-5-S');
    this.__WEENIFY__notGetOrSet = val;
  },
  get already() {
    WEENIFY.spy('crddw8-0');
    return typeof this._already === 'undefined' ? 99 : this._already;
  },
  set already(val) {
    WEENIFY.spy('crddw8-1');
    this._already = val;
  }
};

console.log(`Will use 'propertyGet.used': ${propertyGet.used}`);
console.log(`Will not use 'propertyGet.notUsed'.`);
console.log(`Will also use getter 'propertyGet.already': ${propertyGet.already}`);
console.log('propertySet.onlyGet', propertyGetAndSet.onlyGet);
propertyGetAndSet.onlySet = Math;
console.log('propertySet.onlySet = Math');
console.log('propertySet.getAndSet initially:', propertyGetAndSet.getAndSet);
propertyGetAndSet.getAndSet = 123;
console.log('propertySet.getAndSet now:', propertyGetAndSet.getAndSet);
console.log(`Will not use 'propertySet.notGetOrSet'.`);
console.log('propertySet.already initially:', propertyGetAndSet.already);
propertyGetAndSet.already = true;
console.log('propertySet.already now:', propertyGetAndSet.already);
