export default function ifReturn(redBlue) {
    if (redBlue === 'RED') {
        console.log('IfStatement consequent block - is never actually used.');
        return 'redBlue is RED';
    } else {
        console.log('IfStatement alternate block - will be used.');
        return 'redBlue is not RED';
    }
}
