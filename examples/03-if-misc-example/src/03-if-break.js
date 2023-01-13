export default function ifBreak(redBlue) {
    while (true) {
        if (redBlue === 'RED') {
            console.log('IfStatement consequent block - will be used.');
            break;
        } else {
            console.log('IfStatement middle block - is never actually used.');
            break;
        }
    }
}
