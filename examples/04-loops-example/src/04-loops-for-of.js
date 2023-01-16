export default function loopsForOf(fullArr, emptyArr) {
    for (const val of fullArr) {
        console.log('5 of 7: 04-loops-for-of: First for of loop (block) - will be used.', val);
    }

    for (const val of fullArr)
        console.log('6 of 7: 04-loops-for-of: Second for of loop (no block) - will also be used.', val);

    for (const val of emptyArr) {
        console.log('04-loops-for-of: Third for of loop (block) - will not be used.', val);
    }

    for (const val of emptyArr)
        console.log('04-loops-for-of: Fourth for of loop (no block) - will also not be used.', val);
}
