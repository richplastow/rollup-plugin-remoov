export default function ifBreak(redBlue) {
    while (true) {
        if (redBlue === 'RED') {
            console.log('1st IfStatement consequent block - will be used.');
            break;
        } else {
            console.log('1st IfStatement middle block - is never actually used.');
            break;
        }
    }
}
