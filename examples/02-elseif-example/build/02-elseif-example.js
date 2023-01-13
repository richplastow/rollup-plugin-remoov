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
function basicExample(redBlue) {
  ifElseIfElseWithBlocks(redBlue);
  ifElseIfElseWithoutBlocks(redBlue);
}
basicExample('RED');
