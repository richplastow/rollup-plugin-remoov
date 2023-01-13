export default function loopsWhile(a, b) {
    while (a) {
        console.log('First and second while blocks will both be used.');
        break;
    }
    while (a)
        break;

    while (b) {
        console.log('Third and fourth while blocks are never actually used.');
        break;
    }
    while (b) break;
}
