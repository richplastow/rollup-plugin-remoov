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
W.numSpies['98ojcf'] = 3;
W.spyResults['98ojcf'] = [];
W.spyCalls['98ojcf'] = new Set();
if (! W.willScan) { setTimeout(W.scan, 10); W.willScan = true; }
}(); // end iife // END_WEENIFY_BOILERPLATE

function basicExample(redBlue) {
  WEENIFY.spy('98ojcf-2');
  if (redBlue === 'RED') {
    WEENIFY.spy('98ojcf-0');
    console.log('1 of 1: 01-main: First if statement, a block - will be used.');
  }
  if (redBlue === 'BLUE') {
    WEENIFY.spy('98ojcf-1');
    console.log('01-main: Second if statement, not a block - never actually used.');
  }
}
basicExample('RED');
