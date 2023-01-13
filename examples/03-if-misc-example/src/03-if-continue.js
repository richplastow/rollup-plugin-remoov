export default function ifContinue(redBlue) {
    let doLoop = true;
    while (doLoop) {
        if (redBlue === 'RED') {
            console.log('IfStatement consequent block - will be used.');
            doLoop = false;
            continue;
        } else {
            console.log('IfStatement middle block - is never actually used.');
            doLoop = false;
            continue;
        }
    }
}
