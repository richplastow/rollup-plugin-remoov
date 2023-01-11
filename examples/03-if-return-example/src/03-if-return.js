export default function ifReturn(redBlue) {
    if (redBlue === 'RED') {
        console.log('1st IfStatement consequent block - is never actually used.');
        return 'redBlue is RED';
    } else {
        console.log('1st IfStatement alternate block - will be used.');
        return 'redBlue is not RED';
    }
}
