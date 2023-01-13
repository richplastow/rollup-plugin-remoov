export default function ifThrow(redBlue) {
    if (redBlue === 'RED') {
        console.log('IfStatement consequent block - is never actually used.');
        throw Error('redBlue is RED');
    } else {
        console.log('IfStatement alternate block - will be used.');
        throw Error('redBlue is not RED');
    }
}
