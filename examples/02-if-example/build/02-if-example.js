function ifBreak(redBlue) {
  while (true) {
    if (redBlue === 'RED') {
      console.log('02-if-break: IfStatement consequent block - will be used.');
      break;
    }
  }
}
function ifContinue(redBlue) {
  let doLoop = true;
  while (doLoop) {
    if (redBlue === 'RED') {
      console.log('02-if-continue: IfStatement consequent block - will be used.');
      doLoop = false;
      continue;
    }
  }
}
function ifElseWithBlocks(redBlue) {
  if (redBlue === 'RED') {
    console.log('02-if-else: 1st IfStatement consequent block - will be used.');
  }
}
function ifElseWithoutBlocks(redBlue) {
  if (redBlue === 'BLUE') ; else if (redBlue === 'YELLOW') ; else {
    console.log('02-if-else: 2nd IfStatement alternate NOT a block - will be used.');
  }
}
function ifNested(redBlue, greenYellow) {
  if (redBlue === 'RED') {
    console.log('02-if-nested: Outer IfStatement consequent block - will be used.');
    if (greenYellow === 'GREEN') {
      console.log('02-if-nested: Inner IfStatement consequent block - will be used.');
      return 'greenYellow is GREEN';
    }
  }
}
function ifReturn(redBlue) {
  if (redBlue === 'RED') ; else {
    console.log('02-if-return: IfStatement alternate block - will be used.');
    return 'redBlue is not RED';
  }
}
function ifThrow(redBlue) {
  if (redBlue === 'RED') ; else {
    console.log('02-if-throw: IfStatement alternate block - will be used.');
    throw Error('redBlue is not RED');
  }
}
function ifElse(redBlue) {
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


// Weenify passes needed: 3
