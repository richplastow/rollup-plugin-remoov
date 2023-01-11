function ifBreak(redBlue) {
  while (true) {
    if (redBlue === 'RED') {
      
      console.log('1st IfStatement consequent block - will be used.');
      
      break;
    }
  }
}


function ifContinue(redBlue) {
  let doLoop = true;
  while (doLoop) {
    if (redBlue === 'RED') {
      
      console.log('1st IfStatement consequent block - will be used.');
      doLoop = false;
      
      continue;
    }
  }
}


function ifReturn(redBlue) {
  if (redBlue === 'RED') ; else {
    
    console.log('1st IfStatement alternate block - will be used.');
    
    return 'redBlue is not RED';
  }
}


function ifThrow(redBlue) {
  if (redBlue === 'RED') ; else {
    
    console.log('1st IfStatement alternate block - will be used.');
    
    throw Error('redBlue is not RED');
  }
}

ifBreak('RED');
ifContinue('RED');
ifReturn('BLUE');
try {
  ifThrow('BLUE');
} catch (e) {}
