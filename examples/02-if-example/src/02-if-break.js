export default function ifBreak(redBlue) {
    while (true) {
        if (redBlue === 'RED') {
            console.log('1 of 8: 02-if-break: IfStatement consequent block - will be used.');
            break;
        } else {
            console.log('02-if-break: IfStatement middle block - is never actually used.');
            break;
        }
    }
}
