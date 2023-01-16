export default function loopsForClassic(zero, one, two) {
    for (let i=zero; i<two; i++) {
        console.log('1 of 7: 04-loops-for-classic: First classic for loop (block) - will be used.');
    }

    for (let i=zero; i<two; i++)
        console.log('2 of 7: 04-loops-for-classic: Second classic for loop (no block) - will also be used.');

    for (let i=two; i<one; i++) {
            console.log('04-loops-for-classic: Third classic for loop (block) - will not be used.');
    }

    for (let i=two; i<one; i++)
        console.log('04-loops-for-classic: Fourth classic for loop (no block) - will also not be used.');

}
