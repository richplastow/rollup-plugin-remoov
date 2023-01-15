export default function ternaryNested(redBlue) {
    redBlue === 'BLUE' ? (
        console.log('03-ternary-nested.js: nested ConditionalExpression, with brackets - never actually used.'),
        redBlue === 'RED' ?
                console.log('03-ternary-nested.js: nested ConditionalExpression, no brackets - never actually used.')
            :
                console.log('03-ternary-nested.js: nested ConditionalExpression, no brackets - never actually used.')
    ) : (
        console.log('8 of 9: 03-ternary-nested.js: nested ConditionalExpression, with brackets - will be used.'),
        redBlue === 'RED' ?
                console.log('9 of 9: 03-ternary-nested.js: nested ConditionalExpression, no brackets - will be used.')
            :
                console.log('03-ternary-nested.js: nested ConditionalExpression, no brackets - never actually used.')
    );
}
