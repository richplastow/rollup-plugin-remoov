export default function ifContinue(redBlue) {
    let doLoop = true;
    while (doLoop) {
        if (redBlue === 'RED') {
            console.log('02-if-continue: IfStatement consequent block - will be used.');
            doLoop = false;
            continue;
        } else {
            console.log('02-if-continue: IfStatement middle block - is never actually used.');
            doLoop = false;
            continue;
        }
    }
}
