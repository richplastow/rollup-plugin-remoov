export default function ifThrow(redBlue) {
    if (redBlue === 'RED') {
        console.log('02-if-throw: IfStatement consequent block - is never actually used.');
        throw Error('redBlue is RED');
    } else {
        console.log('02-if-throw: IfStatement alternate block - will be used.');
        throw Error('redBlue is not RED');
    }
}
