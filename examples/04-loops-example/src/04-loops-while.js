export default function loopsWhile(a, b) {
    while (a) {
        console.log('7 of 7: 04-loops-while: First and second while loops will both be used.');
        break;
    }
    while (a)
        break;

    while (b) {
        console.log('Third and fourth while loops are never actually used.');
        break;
    }
    while (b) break;
}
