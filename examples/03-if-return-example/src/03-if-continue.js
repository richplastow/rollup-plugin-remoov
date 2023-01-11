export default function ifContinue(redBlue) {
    let doLoop = true;
    while (doLoop) {
        if (redBlue === 'RED') {
            console.log('1st IfStatement consequent block - will be used.');
            doLoop = false;
            continue;
        } else {
            console.log('1st IfStatement middle block - is never actually used.');
            doLoop = false;
            continue;
        }
    }
}
