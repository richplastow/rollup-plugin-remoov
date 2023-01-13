export default function loopsForOf(fullArr, emptyArr) {
    for (const val of fullArr) {
        console.log('First for of loop (block) - will be used.', val);
    }

    for (const val of fullArr)
        console.log('Second for of loop (no block) - will also be used.', val);

    for (const val of emptyArr) {
        console.log('Third for of loop (block) - will not be used.', val);
    }

    for (const val of emptyArr)
        console.log('Fourth for of loop (no block) - will also not be used.', val);
}
