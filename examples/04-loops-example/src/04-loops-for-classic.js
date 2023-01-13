export default function loopsForClassic(zero, one, two) {
    for (let i=zero; i<two; i++) {
        console.log('First classic for loop (block) - will be used.');
    }

    for (let i=zero; i<two; i++)
        console.log('Second classic for loop (no block) - will also be used.');

    for (let i=two; i<one; i++) {
            console.log('Third classic for loop (block) - will not be used.');
    }

    for (let i=two; i<one; i++)
        console.log('Fourth classic for loop (no block) - will also not be used.');

}
