// BEGIN_WEENIFY_BOILERPLATE
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.numSpies = W.numSpies || {};
W.numSpies['t5mm7v'] = 9;
W.spyResults = W.spyResults || {};
W.spyResults['t5mm7v'] = [];
W.spyCalls = W.spyCalls || {};
W.spyCalls['t5mm7v'] = new Set();
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
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.numSpies = W.numSpies || {};
W.numSpies['xnl6y0'] = 6;
W.spyResults = W.spyResults || {};
W.spyResults['xnl6y0'] = [];
W.spyCalls = W.spyCalls || {};
W.spyCalls['xnl6y0'] = new Set();
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
typeof window === 'object'
    ? (() => window.WEENIFY = window.WEENIFY || {})()
    : typeof global === 'object'
        ? (() => global.WEENIFY = global.WEENIFY || {})()
        : (() => { throw Error('Weenify: No `window` or `global`') })();
!function(){ // begin iife
const W = typeof window === 'object' ? window.WEENIFY : global.WEENIFY;
W.numSpies = W.numSpies || {};
W.numSpies['2wjor3'] = 7;
W.spyResults = W.spyResults || {};
W.spyResults['2wjor3'] = [];
W.spyCalls = W.spyCalls || {};
W.spyCalls['2wjor3'] = new Set();
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

function ternaryNested(redBlue) {
  WEENIFY.spy('2wjor3-6');
  redBlue === 'BLUE' ? (WEENIFY.spy('2wjor3-4'), console.log('03-ternary-nested.js: nested ConditionalExpression, with brackets - never actually used.'), redBlue === 'RED' ? (WEENIFY.spy('2wjor3-0'), console.log('03-ternary-nested.js: nested ConditionalExpression, no brackets - never actually used.')) : (WEENIFY.spy('2wjor3-1'), console.log('03-ternary-nested.js: nested ConditionalExpression, no brackets - never actually used.'))) : (WEENIFY.spy('2wjor3-5'), console.log('8 of 9: 03-ternary-nested.js: nested ConditionalExpression, with brackets - will be used.'), redBlue === 'RED' ? (WEENIFY.spy('2wjor3-2'), console.log('9 of 9: 03-ternary-nested.js: nested ConditionalExpression, no brackets - will be used.')) : (WEENIFY.spy('2wjor3-3'), console.log('03-ternary-nested.js: nested ConditionalExpression, no brackets - never actually used.')));
}

switchBasic('RED');
ternaryBasic('RED');
ternaryNested('RED');
