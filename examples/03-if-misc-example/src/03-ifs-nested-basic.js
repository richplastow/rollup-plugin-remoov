export default function ifsNestedBasic(redBlue, greenYellow) {
    if (redBlue === 'RED') {
        console.log('Outer IfStatement consequent block - will be used.');
        if (greenYellow === 'GREEN') {
            console.log('Inner IfStatement consequent block - will be used.');
            return 'greenYellow is GREEN';
        } else {
            console.log('Inner IfStatement alternate block - is never actually used.');
            return 'greenYellow is not GREEN';
        }
    }
}
