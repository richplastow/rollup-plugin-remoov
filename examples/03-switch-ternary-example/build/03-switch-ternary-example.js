function switchBasic(redBlue) {
  switch (redBlue) {
    case 'RED':
      {
        console.log('1 of 4: 03-switch-basic: SwitchCase block and break - will be used.');
        break;
      }
  }
  switch (redBlue) {
    case 'RED':
      {
        console.log('2 of 4: 03-switch-basic: SwitchCase no-block, no-break - will be used.');
      }
    case 'BLUE':
      {
        console.log('3 of 4: 03-switch-basic: SwitchCase no-block, no-break - is also used, because `case` line 14 has no `break`.');
      }
    case 'YELLOW':
    default:
      {
        console.log('4 of 4: 03-switch-basic: Default SwitchCase no-block - is also used, because `case` line 14 has no `break`.');
      }
  }
}
switchBasic('RED');


// Weenify passes needed: 2
