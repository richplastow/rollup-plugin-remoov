export default function loopsForIn(fullObj, emptyObj) {
    for (const key in fullObj) {
        console.log('First for in loop (block) - will be used.', key, fullObj[key]);
    }

    for (const key in fullObj)
        console.log('Second for in loop (no block) - will also be used.', key, fullObj[key]);

    for (const key in emptyObj) {
        console.log('Third for in loop (block) - will not be used.', key, emptyObj[key]);
    }

    for (const key in emptyObj)
        console.log('Fourth for in loop (no block) - will also not be used.', key, emptyObj[key]);
}
