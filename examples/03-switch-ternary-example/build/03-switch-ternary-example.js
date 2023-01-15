function switchBasic(redBlue) {
  switch (redBlue) {
    case 'RED':
      {
        console.log('1 of 9: 03-switch-basic: SwitchCase block and break - will be used.');
        break;
      }
  }
  switch (redBlue) {
    case 'RED':
      {
        console.log('2 of 9: 03-switch-basic: SwitchCase no-block, no-break - will be used.');
      }
    case 'BLUE':
      {
        console.log('3 of 9: 03-switch-basic: SwitchCase no-block, no-break - is also used, because `case` line 14 has no `break`.');
      }
    case 'YELLOW':
    default:
      {
        console.log('4 of 9: 03-switch-basic: Default SwitchCase no-block - is also used, because `case` line 14 has no `break`.');
      }
  }
}
function ternaryBasic(redBlue) {
  redBlue === 'RED' ? console.log('5 of 9: 03-ternary-basic: ConditionalExpression, no brackets - will be used.') : 0;
  redBlue === 'BLUE' ? 0 : (console.log('6 of 9: 03-ternary-basic: ConditionalExpression, with brackets - will be used.'), logPlace('7 of 9: 03-ternary-basic: alternate'));
}
function logPlace(place) {
  console.log(place);
}
function ternaryNested(redBlue) {
  redBlue === 'BLUE' ? 0 : (console.log('8 of 9: 03-ternary-nested.js: nested ConditionalExpression, with brackets - will be used.'), redBlue === 'RED' ? console.log('9 of 9: 03-ternary-nested.js: nested ConditionalExpression, no brackets - will be used.') : 0);
}
switchBasic('RED');
ternaryBasic('RED');
ternaryNested('RED');


// Weenify passes needed: 2
