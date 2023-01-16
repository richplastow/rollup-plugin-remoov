export default function loopsForIn(fullObj, emptyObj) {
    for (const key in fullObj) {
        console.log('3 of 7: 04-loops-for-in: First for in loop (block) - will be used.', key, fullObj[key]);
    }

    for (const key in fullObj)
        console.log('4 of 7: 04-loops-for-in: Second for in loop (no block) - will also be used.', key, fullObj[key]);

    for (const key in emptyObj) {
        console.log('04-loops-for-in: Third for in loop (block) - will not be used.', key, emptyObj[key]);
    }

    for (const key in emptyObj)
        console.log('04-loops-for-in: Fourth for in loop (no block) - will also not be used.', key, emptyObj[key]);
}
