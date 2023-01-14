function ifElseIfElseWithBlocks(redBlue) {
  if (redBlue === 'RED') {
    console.log('1st IfStatement consequent block - will be used.');
  }
}
function ifElseIfElseWithoutBlocks(redBlue) {
  if (redBlue === 'BLUE') ; else if (redBlue === 'YELLOW') ; else {
    console.log('2nd IfStatement alternate NOT a block - will be used.');
  }
}
function ifElseIfElseExample(redBlue) {
  ifElseIfElseWithBlocks(redBlue);
  ifElseIfElseWithoutBlocks(redBlue);
}
ifElseIfElseExample('RED');


// Weenify passes needed: 2
