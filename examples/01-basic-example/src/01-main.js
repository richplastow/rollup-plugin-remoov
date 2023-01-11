function basicExample(redBlue) {
    if (redBlue === 'RED') {
        console.log('1st IfStatement consequent block - will be used.');
    }
    if (redBlue === 'BLUE')
        console.log('2nd IfStatement consequent NOT a block - is never actually used.');
}

basicExample('RED');
