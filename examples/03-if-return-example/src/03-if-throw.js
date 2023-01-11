export default function ifThrow(redBlue) {
    if (redBlue === 'RED') {
        console.log('1st IfStatement consequent block - is never actually used.');
        throw Error('redBlue is RED');
    } else {
        console.log('1st IfStatement alternate block - will be used.');
        throw Error('redBlue is not RED');
    }
}
