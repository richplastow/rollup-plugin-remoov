function ifBreak(redBlue) {
  while (true) {
    if (redBlue === 'RED') {
      console.log('IfStatement consequent block - will be used.');
      break;
    }
  }
}
function ifContinue(redBlue) {
  let doLoop = true;
  while (doLoop) {
    if (redBlue === 'RED') {
      console.log('IfStatement consequent block - will be used.');
      doLoop = false;
      continue;
    }
  }
}
function ifReturn(redBlue) {
  if (redBlue === 'RED') ; else {
    console.log('IfStatement alternate block - will be used.');
    return 'redBlue is not RED';
  }
}
function ifThrow(redBlue) {
  if (redBlue === 'RED') ; else {
    console.log('IfStatement alternate block - will be used.');
    throw Error('redBlue is not RED');
  }
}
function ifsNestedBasic(redBlue, greenYellow) {
  if (redBlue === 'RED') {
    console.log('Outer IfStatement consequent block - will be used.');
    if (greenYellow === 'GREEN') {
      console.log('Inner IfStatement consequent block - will be used.');
      return 'greenYellow is GREEN';
    }
  }
}
ifBreak('RED');
ifContinue('RED');
ifReturn('BLUE');
try {
  ifThrow('BLUE');
} catch (e) {}
ifsNestedBasic('RED', 'GREEN');


// Weenify passes needed: 3
