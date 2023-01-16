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
W.numSpies['8tdzor'] = 5;
W.spyResults['8tdzor'] = [];
W.spyCalls['8tdzor'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 10); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE

function loopsForClassic(zero, one, two) {
  WEENIFY.spy('8tdzor-4');
  for (let i = zero; i < two; i++) {
    WEENIFY.spy('8tdzor-0');
    console.log('1 of 7: 04-loops-for-classic: First classic for loop (block) - will be used.');
  }
  for (let i = zero; i < two; i++) {
    WEENIFY.spy('8tdzor-1');
    console.log('2 of 7: 04-loops-for-classic: Second classic for loop (no block) - will also be used.');
  }
  for (let i = two; i < one; i++) {
    WEENIFY.spy('8tdzor-2');
    console.log('04-loops-for-classic: Third classic for loop (block) - will not be used.');
  }
  for (let i = two; i < one; i++) {
    WEENIFY.spy('8tdzor-3');
    console.log('04-loops-for-classic: Fourth classic for loop (no block) - will also not be used.');
  }
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
W.numSpies['4s0u2m'] = 5;
W.spyResults['4s0u2m'] = [];
W.spyCalls['4s0u2m'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 10); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE

function loopsForIn(fullObj, emptyObj) {
  WEENIFY.spy('4s0u2m-4');
  for (const key in fullObj) {
    WEENIFY.spy('4s0u2m-0');
    console.log('3 of 7: 04-loops-for-in: First for in loop (block) - will be used.', key, fullObj[key]);
  }
  for (const key in fullObj) {
    WEENIFY.spy('4s0u2m-1');
    console.log('4 of 7: 04-loops-for-in: Second for in loop (no block) - will also be used.', key, fullObj[key]);
  }
  for (const key in emptyObj) {
    WEENIFY.spy('4s0u2m-2');
    console.log('04-loops-for-in: Third for in loop (block) - will not be used.', key, emptyObj[key]);
  }
  for (const key in emptyObj) {
    WEENIFY.spy('4s0u2m-3');
    console.log('04-loops-for-in: Fourth for in loop (no block) - will also not be used.', key, emptyObj[key]);
  }
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
W.numSpies['4ov6eo'] = 5;
W.spyResults['4ov6eo'] = [];
W.spyCalls['4ov6eo'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 10); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE

function loopsForOf(fullArr, emptyArr) {
  WEENIFY.spy('4ov6eo-4');
  for (const val of fullArr) {
    WEENIFY.spy('4ov6eo-0');
    console.log('5 of 7: 04-loops-for-of: First for of loop (block) - will be used.', val);
  }
  for (const val of fullArr) {
    WEENIFY.spy('4ov6eo-1');
    console.log('6 of 7: 04-loops-for-of: Second for of loop (no block) - will also be used.', val);
  }
  for (const val of emptyArr) {
    WEENIFY.spy('4ov6eo-2');
    console.log('04-loops-for-of: Third for of loop (block) - will not be used.', val);
  }
  for (const val of emptyArr) {
    WEENIFY.spy('4ov6eo-3');
    console.log('04-loops-for-of: Fourth for of loop (no block) - will also not be used.', val);
  }
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
W.numSpies['clx9pq'] = 5;
W.spyResults['clx9pq'] = [];
W.spyCalls['clx9pq'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 10); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE

function loopsWhile(a, b) {
  WEENIFY.spy('clx9pq-4');
  while (a) {
    WEENIFY.spy('clx9pq-0');
    console.log('7 of 7: 04-loops-while: First and second while loops will both be used.');
    break;
  }
  while (a) {
    WEENIFY.spy('clx9pq-1');
    break;
  }
  while (b) {
    WEENIFY.spy('clx9pq-2');
    console.log('Third and fourth while loops are never actually used.');
    break;
  }
  while (b) {
    WEENIFY.spy('clx9pq-3');
    break;
  }
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
W.numSpies['yzze0g'] = 2;
W.spyResults['yzze0g'] = [];
W.spyCalls['yzze0g'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 10); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE
loopsForClassic(0, 1, 2);
loopsForIn({
  get a() {
    WEENIFY.spy('yzze0g-0-G');
    return typeof this.__WEENIFY__a === 'undefined' ? 0 : this.__WEENIFY__a;
  },
  set a(val) {
    WEENIFY.spy('yzze0g-0-S');
    this.__WEENIFY__a = val;
  },
  get b() {
    WEENIFY.spy('yzze0g-1-G');
    return typeof this.__WEENIFY__b === 'undefined' ? 1 : this.__WEENIFY__b;
  },
  set b(val) {
    WEENIFY.spy('yzze0g-1-S');
    this.__WEENIFY__b = val;
  }
}, {});
loopsForOf(['a', 'b'], []);
loopsWhile(true, false);
