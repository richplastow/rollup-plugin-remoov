export default function ternaryBasic(redBlue) {
    redBlue === 'RED' ?
        console.log('5 of 9: 03-ternary-basic: ConditionalExpression, no brackets - will be used.')
    :
        console.log('03-ternary-basic: ConditionalExpression, no brackets - never actually used.')
    ;
    redBlue === 'BLUE' ? (
        console.log('03-ternary-basic: ConditionalExpression, with brackets - never actually used.'),
        logPlace('03-ternary-basic: consequent')
    ) : (
        console.log('6 of 9: 03-ternary-basic: ConditionalExpression, with brackets - will be used.'),
        logPlace('7 of 9: 03-ternary-basic: alternate')
    );
}

function logPlace(place) { console.log(place) }
