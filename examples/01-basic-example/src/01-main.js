function basicExample(redBlue) {
    if (redBlue === 'RED') {
        console.log('1 of 1: 01-main: First if statement, a block - will be used.');
    }
    if (redBlue === 'BLUE')
        console.log('01-main: Second if statement, not a block - never actually used.');
}

basicExample('RED');
