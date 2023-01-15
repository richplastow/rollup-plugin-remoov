export default function ifReturn(redBlue) {
    if (redBlue === 'RED') {
        console.log('02-if-return: IfStatement consequent block - is never actually used.');
        return 'redBlue is RED';
    } else {
        console.log('02-if-return: IfStatement alternate block - will be used.');
        return 'redBlue is not RED';
    }
}
