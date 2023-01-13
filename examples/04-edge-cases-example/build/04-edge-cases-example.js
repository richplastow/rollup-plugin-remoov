function ifsNestedBasic(redBlue, greenYellow) {
  if (redBlue === 'RED') {
    console.log('1st IfStatement consequent outer block - will be used.');
    if (greenYellow === 'GREEN') {
      return 'greenYellow is GREEN';
    }
  }
}
ifsNestedBasic('RED', 'GREEN');
