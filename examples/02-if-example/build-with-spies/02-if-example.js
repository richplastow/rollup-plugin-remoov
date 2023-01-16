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
W.numSpies['pwcwmq'] = 4;
W.spyResults['pwcwmq'] = [];
W.spyCalls['pwcwmq'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 0.1); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE

function ifBreak(redBlue) {
  WEENIFY.spy('pwcwmq-3');
  while (true) {
    WEENIFY.spy('pwcwmq-2');
    if (redBlue === 'RED') {
      WEENIFY.spy('pwcwmq-0');
      console.log('1 of 8: 02-if-break: IfStatement consequent block - will be used.');
      break;
    } else {
      WEENIFY.spy('pwcwmq-1');
      console.log('02-if-break: IfStatement middle block - is never actually used.');
      break;
    }
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
W.numSpies['vslhq2'] = 4;
W.spyResults['vslhq2'] = [];
W.spyCalls['vslhq2'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 0.1); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE

function ifContinue(redBlue) {
  WEENIFY.spy('vslhq2-3');
  let doLoop = true;
  while (doLoop) {
    WEENIFY.spy('vslhq2-2');
    if (redBlue === 'RED') {
      WEENIFY.spy('vslhq2-0');
      console.log('2 of 8: 02-if-continue: IfStatement consequent block - will be used.');
      doLoop = false;
      continue;
    } else {
      WEENIFY.spy('vslhq2-1');
      console.log('02-if-continue: IfStatement middle block - is never actually used.');
      doLoop = false;
      continue;
    }
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
W.numSpies['xp46qw'] = 8;
W.spyResults['xp46qw'] = [];
W.spyCalls['xp46qw'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 0.1); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE

function ifElseWithBlocks(redBlue) {
  WEENIFY.spy('xp46qw-3');
  if (redBlue === 'RED') {
    WEENIFY.spy('xp46qw-2');
    console.log('3 of 8: 02-if-else: 1st IfStatement consequent block - will be used.');
  } else if (redBlue === 'YELLOW') {
    WEENIFY.spy('xp46qw-0');
    console.log('02-if-else: 1st IfStatement middle block - is never actually used.');
  } else {
    WEENIFY.spy('xp46qw-1');
    console.log('02-if-else: 1st IfStatement alternate block - also never used.');
  }
}
function ifElseWithoutBlocks(redBlue) {
  WEENIFY.spy('xp46qw-7');
  if (redBlue === 'BLUE') {
    WEENIFY.spy('xp46qw-6');
    console.log('02-if-else: 2nd IfStatement consequent NOT a block - is never actually used.');
  } else if (redBlue === 'YELLOW') {
    WEENIFY.spy('xp46qw-4');
    console.log('02-if-else: 2nd IfStatement middle NOT a block - also never used.');
  } else {
    WEENIFY.spy('xp46qw-5');
    console.log('4 of 8: 02-if-else: 2nd IfStatement alternate NOT a block - will be used.');
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
W.numSpies['rqlsfe'] = 4;
W.spyResults['rqlsfe'] = [];
W.spyCalls['rqlsfe'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 0.1); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE

function ifNested(redBlue, greenYellow) {
  WEENIFY.spy('rqlsfe-3');
  if (redBlue === 'RED') {
    WEENIFY.spy('rqlsfe-2');
    console.log('5 of 8: 02-if-nested: Outer IfStatement consequent block - will be used.');
    if (greenYellow === 'GREEN') {
      WEENIFY.spy('rqlsfe-0');
      console.log('6 of 8: 02-if-nested: Inner IfStatement consequent block - will be used.');
      return 'greenYellow is GREEN';
    } else {
      WEENIFY.spy('rqlsfe-1');
      console.log('02-if-nested: Inner IfStatement alternate block - is never actually used.');
      return 'greenYellow is not GREEN';
    }
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
W.numSpies['5fymjz'] = 3;
W.spyResults['5fymjz'] = [];
W.spyCalls['5fymjz'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 0.1); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE

function ifReturn(redBlue) {
  WEENIFY.spy('5fymjz-2');
  if (redBlue === 'RED') {
    WEENIFY.spy('5fymjz-0');
    console.log('02-if-return: IfStatement consequent block - is never actually used.');
    return 'redBlue is RED';
  } else {
    WEENIFY.spy('5fymjz-1');
    console.log('7 of 8: 02-if-return: IfStatement alternate block - will be used.');
    return 'redBlue is not RED';
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
W.numSpies['2n5md5'] = 3;
W.spyResults['2n5md5'] = [];
W.spyCalls['2n5md5'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 0.1); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE

function ifThrow(redBlue) {
  WEENIFY.spy('2n5md5-2');
  if (redBlue === 'RED') {
    WEENIFY.spy('2n5md5-0');
    console.log('02-if-throw: IfStatement consequent block - is never actually used.');
    throw Error('redBlue is RED');
  } else {
    WEENIFY.spy('2n5md5-1');
    console.log('8 of 8: 02-if-throw: IfStatement alternate block - will be used.');
    throw Error('redBlue is not RED');
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
W.numSpies['b7p544'] = 1;
W.spyResults['b7p544'] = [];
W.spyCalls['b7p544'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 0.1); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE
function ifElse(redBlue) {
  WEENIFY.spy('b7p544-0');
  ifElseWithBlocks(redBlue);
  ifElseWithoutBlocks(redBlue);
}
ifBreak('RED');
ifContinue('RED');
ifElse('RED');
ifNested('RED', 'GREEN');
ifReturn('BLUE');
try {
  ifThrow('BLUE');
} catch (e) {}
