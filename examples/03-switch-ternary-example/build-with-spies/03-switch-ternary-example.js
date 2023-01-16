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
W.numSpies['t5mm7v'] = 9;
W.spyResults['t5mm7v'] = [];
W.spyCalls['t5mm7v'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 10); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE

function switchBasic(redBlue) {
  WEENIFY.spy('t5mm7v-8');
  switch (redBlue) {
    case 'RED':
      {
        WEENIFY.spy('t5mm7v-0');
        console.log('1 of 9: 03-switch-basic: SwitchCase block and break - will be used.');
        break;
      }
    case 'BLUE':
      {
        WEENIFY.spy('t5mm7v-1');
        console.log('03-switch-basic: SwitchCase block and break - never actually used.');
        break;
      }
    case 'YELLOW':
      {
        WEENIFY.spy('t5mm7v-2');
      }
    default:
      {
        WEENIFY.spy('t5mm7v-3');
        console.log('03-switch-basic: Default SwitchCase block - never actually used.');
      }
  }
  switch (redBlue) {
    case 'RED':
      {
        WEENIFY.spy('t5mm7v-4');
        console.log('2 of 9: 03-switch-basic: SwitchCase no-block, no-break - will be used.');
      }
    case 'BLUE':
      {
        WEENIFY.spy('t5mm7v-5');
        console.log('3 of 9: 03-switch-basic: SwitchCase no-block, no-break - is also used, because `case` line 14 has no `break`.');
      }
    case 'YELLOW':
      {
        WEENIFY.spy('t5mm7v-6');
      }
    default:
      {
        WEENIFY.spy('t5mm7v-7');
        console.log('4 of 9: 03-switch-basic: Default SwitchCase no-block - is also used, because `case` line 14 has no `break`.');
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
W.numSpies['xnl6y0'] = 6;
W.spyResults['xnl6y0'] = [];
W.spyCalls['xnl6y0'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 10); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE

function ternaryBasic(redBlue) {
  WEENIFY.spy('xnl6y0-4');
  redBlue === 'RED' ? (WEENIFY.spy('xnl6y0-0'), console.log('5 of 9: 03-ternary-basic: ConditionalExpression, no brackets - will be used.')) : (WEENIFY.spy('xnl6y0-1'), console.log('03-ternary-basic: ConditionalExpression, no brackets - never actually used.'));
  redBlue === 'BLUE' ? (WEENIFY.spy('xnl6y0-2'), console.log('03-ternary-basic: ConditionalExpression, with brackets - never actually used.'), logPlace('03-ternary-basic: consequent')) : (WEENIFY.spy('xnl6y0-3'), console.log('6 of 9: 03-ternary-basic: ConditionalExpression, with brackets - will be used.'), logPlace('7 of 9: 03-ternary-basic: alternate'));
}
function logPlace(place) {
  WEENIFY.spy('xnl6y0-5');
  console.log(place);
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
W.numSpies['2wjor3'] = 7;
W.spyResults['2wjor3'] = [];
W.spyCalls['2wjor3'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 10); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE

function ternaryNested(redBlue) {
  WEENIFY.spy('2wjor3-6');
  redBlue === 'BLUE' ? (WEENIFY.spy('2wjor3-4'), console.log('03-ternary-nested.js: nested ConditionalExpression, with brackets - never actually used.'), redBlue === 'RED' ? (WEENIFY.spy('2wjor3-0'), console.log('03-ternary-nested.js: nested ConditionalExpression, no brackets - never actually used.')) : (WEENIFY.spy('2wjor3-1'), console.log('03-ternary-nested.js: nested ConditionalExpression, no brackets - never actually used.'))) : (WEENIFY.spy('2wjor3-5'), console.log('8 of 9: 03-ternary-nested.js: nested ConditionalExpression, with brackets - will be used.'), redBlue === 'RED' ? (WEENIFY.spy('2wjor3-2'), console.log('9 of 9: 03-ternary-nested.js: nested ConditionalExpression, no brackets - will be used.')) : (WEENIFY.spy('2wjor3-3'), console.log('03-ternary-nested.js: nested ConditionalExpression, no brackets - never actually used.')));
}

switchBasic('RED');
ternaryBasic('RED');
ternaryNested('RED');
