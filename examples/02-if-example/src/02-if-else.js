export function ifElseWithBlocks(redBlue) {
    if (redBlue === 'RED') {
        console.log('02-if-else: 1st IfStatement consequent block - will be used.');
    } else if (redBlue === 'YELLOW') {
        console.log('02-if-else: 1st IfStatement middle block - is never actually used.');
    } else {
        console.log('02-if-else: 1st IfStatement alternate block - also never used.');
    }
}

export function ifElseWithoutBlocks(redBlue) {
    if (redBlue === 'BLUE')
        console.log('02-if-else: 2nd IfStatement consequent NOT a block - is never actually used.');
    else if (redBlue === 'YELLOW')
        console.log('02-if-else: 2nd IfStatement middle NOT a block - also never used.');
    else
        console.log('02-if-else: 2nd IfStatement alternate NOT a block - will be used.');
}
