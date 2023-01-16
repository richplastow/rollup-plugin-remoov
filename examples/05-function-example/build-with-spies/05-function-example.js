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
W.numSpies['poty2u'] = 6;
W.spyResults['poty2u'] = [];
W.spyCalls['poty2u'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 10); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE

class ClassMethodInstance {
  classMethodInstanceClassicCalled(doCallSecond) {
    WEENIFY.spy('poty2u-0');
    console.log('1 of 12: 05-class-method-instance: First instance classic method will be used.');
    return doCallSecond && this.classMethodInstanceClassicNotCalled();
  }
  classMethodInstanceClassicNotCalled() {
    WEENIFY.spy('poty2u-1');
    console.log('05-class-method-instance: Second instance classic method will not be used.');
  }
  classMethodInstanceArrowBlockCalled = doCallSecond => {
    WEENIFY.spy('poty2u-2');
    console.log('2 of 12: 05-class-method-instance: First instance arrow block method will be used.');
    return doCallSecond && this.classMethodInstanceArrowBlockNotCalled();
  };
  classMethodInstanceArrowBlockNotCalled = () => {
    WEENIFY.spy('poty2u-3');
    console.log('05-class-method-instance: Second instance arrow block method will not be used.');
  };
  classMethodInstanceArrowNoBlockCalled = doCallSecond => {
    WEENIFY.spy('poty2u-4');
    console.log('3 of 12: 05-class-method-instance: First instance arrow no block method will be used.') || doCallSecond && this.classMethodInstanceArrowNoBlockNotCalled();
  };
  classMethodInstanceArrowNoBlockNotCalled = () => {
    WEENIFY.spy('poty2u-5');
    console.log('05-class-method-instance: Second instance arrow no block method will not be used.');
  };
}

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
W.numSpies['u4s4zj'] = 6;
W.spyResults['u4s4zj'] = [];
W.spyCalls['u4s4zj'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 10); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE

class ClassMethodStatic {
  static classMethodStaticClassicCalled(doCallSecond) {
    WEENIFY.spy('u4s4zj-0');
    console.log('4 of 12: 05-class-method-static: First static classic method will be used.');
    return doCallSecond && ClassMethodStatic.classMethodStaticClassicNotCalled();
  }
  static classMethodStaticClassicNotCalled() {
    WEENIFY.spy('u4s4zj-1');
    console.log('05-class-method-static: Second static classic method will not be used.');
  }
}
ClassMethodStatic.classMethodStaticArrowBlockCalled = doCallSecond => {
  WEENIFY.spy('u4s4zj-2');
  console.log('5 of 12: 05-class-method-static: First static arrow block method will be used.');
  return doCallSecond && ClassMethodStatic.classMethodStaticArrowBlockNotCalled();
};
ClassMethodStatic.classMethodStaticArrowBlockNotCalled = () => {
  WEENIFY.spy('u4s4zj-3');
  console.log('05-class-method-static: Second static arrow block method will not be used.');
};
ClassMethodStatic.classMethodStaticArrowNoBlockCalled = doCallSecond => {
  WEENIFY.spy('u4s4zj-4');
  console.log('6 of 12: 05-class-method-static: First static arrow no block method will be used.') || doCallSecond && ClassMethodStatic.classMethodStaticArrowNoBlockNotCalled();
};
ClassMethodStatic.classMethodStaticArrowNoBlockNotCalled = () => {
  WEENIFY.spy('u4s4zj-5');
  console.log('05-class-method-static: Second static arrow no block method will not be used.');
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
W.numSpies['8syec4'] = 4;
W.spyResults['8syec4'] = [];
W.spyCalls['8syec4'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 10); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE

const functionArrowBlockCalled = doCallSecond => {
  WEENIFY.spy('8syec4-0');
  console.log('7 of 12: 05-function-arrow: First arrow block function will be used.');
  return doCallSecond && functionArrowBlockNotCalled();
};
const functionArrowBlockNotCalled = () => {
  WEENIFY.spy('8syec4-1');
  console.log('05-function-arrow: Second arrow block function will not be used.');
};
const functionArrowNoBlockCalled = doCallSecond => {
  WEENIFY.spy('8syec4-2');
  console.log('8 of 12: 05-function-arrow: First arrow no-block function will be used.') || doCallSecond && functionArrowNoBlockNotCalled();
};
const functionArrowNoBlockNotCalled = () => {
  WEENIFY.spy('8syec4-3');
  console.log('05-function-arrow: Second arrow no-block function will not be used.');
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
W.numSpies['wz184r'] = 2;
W.spyResults['wz184r'] = [];
W.spyCalls['wz184r'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 10); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE

function functionClassicCalled(doCallSecond) {
  WEENIFY.spy('wz184r-0');
  console.log('9 of 12: 05-function-classic: First classic function will be used.');
  return doCallSecond && functionClassicNotCalled();
}
function functionClassicNotCalled() {
  WEENIFY.spy('wz184r-1');
  console.log('05-function-classic: Second classic function will not be used.');
}

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
W.numSpies['by96i1'] = 6;
W.spyResults['by96i1'] = [];
W.spyCalls['by96i1'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 10); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE

const objectMethod = {
  objectMethodClassicCalled(doCallSecond) {
    WEENIFY.spy('by96i1-0');
    console.log('10 of 12: 05-object-method: First instance classic object method will be used.');
    return doCallSecond && objectMethod.objectMethodClassicNotCalled();
  },
  objectMethodClassicNotCalled() {
    WEENIFY.spy('by96i1-1');
    console.log('05-object-method: Second instance classic object method will not be used.');
  },
  objectMethodArrowBlockCalled: doCallSecond => {
    WEENIFY.spy('by96i1-2');
    console.log('11 of 12: 05-object-method: First instance arrow block object method will be used.');
    return doCallSecond && objectMethod.objectMethodArrowBlockNotCalled();
  },
  objectMethodArrowBlockNotCalled: () => {
    WEENIFY.spy('by96i1-3');
    console.log('05-object-method: Second instance arrow block object method will not be used.');
  },
  objectMethodArrowNoBlockCalled: doCallSecond => {
    WEENIFY.spy('by96i1-4');
    console.log('12 of 12: 05-object-method: First instance arrow no block object method will be used.') || doCallSecond && objectMethod.objectMethodArrowNoBlockNotCalled();
  },
  objectMethodArrowNoBlockNotCalled: () => {
    WEENIFY.spy('by96i1-5');
    console.log('05-object-method: Second instance arrow no block object method will not be used.');
  }
};

const doCallSecond = false;
const instance = new ClassMethodInstance();
instance.classMethodInstanceClassicCalled(doCallSecond);
instance.classMethodInstanceArrowBlockCalled(doCallSecond);
instance.classMethodInstanceArrowNoBlockCalled(doCallSecond);
ClassMethodStatic.classMethodStaticClassicCalled(doCallSecond);
ClassMethodStatic.classMethodStaticArrowBlockCalled(doCallSecond);
ClassMethodStatic.classMethodStaticArrowNoBlockCalled(doCallSecond);
functionArrowBlockCalled(doCallSecond);
functionArrowNoBlockCalled(doCallSecond);
functionClassicCalled(doCallSecond);
objectMethod.objectMethodClassicCalled(doCallSecond);
objectMethod.objectMethodArrowBlockCalled(doCallSecond);
objectMethod.objectMethodArrowNoBlockCalled(doCallSecond);
