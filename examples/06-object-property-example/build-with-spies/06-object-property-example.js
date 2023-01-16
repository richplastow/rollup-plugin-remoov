// BEGIN_WEENIFY_BOILERPLATE
!function(){ // begin iife
const W = globalThis.WEENIFY = globalThis.WEENIFY || {
    numSpies:{}, spyResults:{}, spyCalls:{},
    spy(id) { const [ pathHash, index ] = id.split('-');
        W.spyCalls[pathHash].add(+index); },
    scan() {
        for (const pathHash in W.spyCalls)
            for (let i=0; i<W.numSpies[pathHash]; i++)
                W.spyResults[pathHash].push(
                    W.spyCalls[pathHash].has(i) ? 0 : 1 );
        const srLists = [], S = '        ';
        for (const pathHash in W.spyCalls) srLists.push(
            `\n${S}'${pathHash}': '${enc(W.spyResults[pathHash]).map(
                (c,i)=>i%99||!i?c:`' +\n${S}    '${c}`).join('')}'`);
        console.log('const weenifyOptions = {\n' +
            '    spyResults: {' + srLists.join() + '\n    },\n};'); }
};
function enc(arr) {
    arr = [...arr, ...(Array((6 - (arr.length % 6)) % 6).fill(0))];
    let out = [], num = 0, lut = ('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        '^_abcdefghijklmnopqrstuvwxyz').split('');
    for (let i=0; i<arr.length; i++) {
        if (i !== 0 && (i % 6) === 0) out.push(lut[num]), num = 0;
        if (arr[i] === 1) num += 1 << (i % 6); }
    out.push(lut[num]); return out }
W.numSpies['4lvt61'] = 3;
W.spyResults['4lvt61'] = [];
W.spyCalls['4lvt61'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 10); W.willScan = true; }
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
!function(){ // begin iife
const W = globalThis.WEENIFY = globalThis.WEENIFY || {
    numSpies:{}, spyResults:{}, spyCalls:{},
    spy(id) { const [ pathHash, index ] = id.split('-');
        W.spyCalls[pathHash].add(+index); },
    scan() {
        for (const pathHash in W.spyCalls)
            for (let i=0; i<W.numSpies[pathHash]; i++)
                W.spyResults[pathHash].push(
                    W.spyCalls[pathHash].has(i) ? 0 : 1 );
        const srLists = [], S = '        ';
        for (const pathHash in W.spyCalls) srLists.push(
            `\n${S}'${pathHash}': '${enc(W.spyResults[pathHash]).map(
                (c,i)=>i%99||!i?c:`' +\n${S}    '${c}`).join('')}'`);
        console.log('const weenifyOptions = {\n' +
            '    spyResults: {' + srLists.join() + '\n    },\n};'); }
};
function enc(arr) {
    arr = [...arr, ...(Array((6 - (arr.length % 6)) % 6).fill(0))];
    let out = [], num = 0, lut = ('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
        '^_abcdefghijklmnopqrstuvwxyz').split('');
    for (let i=0; i<arr.length; i++) {
        if (i !== 0 && (i % 6) === 0) out.push(lut[num]), num = 0;
        if (arr[i] === 1) num += 1 << (i % 6); }
    out.push(lut[num]); return out }
W.numSpies['crddw8'] = 8;
W.spyResults['crddw8'] = [];
W.spyCalls['crddw8'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 10); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE

const propertyGetAndSet = {
  get onlyGet() {
    WEENIFY.spy('crddw8-4-G');
    return typeof this.__WEENIFY__onlyGet === 'undefined' ? 'this will only be getted' : this.__WEENIFY__onlyGet;
  },
  set onlyGet(val) {
    WEENIFY.spy('crddw8-4-S');
    this.__WEENIFY__onlyGet = val;
  },
  get onlySet() {
    WEENIFY.spy('crddw8-5-G');
    return typeof this.__WEENIFY__onlySet === 'undefined' ? 'this will only be setted' : this.__WEENIFY__onlySet;
  },
  set onlySet(val) {
    WEENIFY.spy('crddw8-5-S');
    this.__WEENIFY__onlySet = val;
  },
  get 'getAndSet'() {
    WEENIFY.spy('crddw8-6-G');
    return typeof this.__WEENIFY__getAndSet === 'undefined' ? 'this will be setted and getted' : this.__WEENIFY__getAndSet;
  },
  set 'getAndSet'(val) {
    WEENIFY.spy('crddw8-6-S');
    this.__WEENIFY__getAndSet = val;
  },
  get notGetOrSet() {
    WEENIFY.spy('crddw8-7-G');
    return typeof this.__WEENIFY__notGetOrSet === 'undefined' ? 'this will not be getted or setted - so will be removed' : this.__WEENIFY__notGetOrSet;
  },
  set notGetOrSet(val) {
    WEENIFY.spy('crddw8-7-S');
    this.__WEENIFY__notGetOrSet = val;
  },
  get already() {
    WEENIFY.spy('crddw8-2');
    return typeof this._already === 'undefined' ? (WEENIFY.spy('crddw8-0'), 99) : (WEENIFY.spy('crddw8-1'), this._already);
  },
  set already(val) {
    WEENIFY.spy('crddw8-3');
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
