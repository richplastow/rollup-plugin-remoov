export default function ifNested(redBlue, greenYellow) {
    if (redBlue === 'RED') {
        console.log('5 of 8: 02-if-nested: Outer IfStatement consequent block - will be used.');
        if (greenYellow === 'GREEN') {
            console.log('6 of 8: 02-if-nested: Inner IfStatement consequent block - will be used.');
            return 'greenYellow is GREEN';
        } else {
            console.log('02-if-nested: Inner IfStatement alternate block - is never actually used.');
            return 'greenYellow is not GREEN';
        }
    }
}
