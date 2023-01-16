const input = [0,0,0,0,0,0, 1,1,1,1,1,1, 0,0,0,0,0,1, 1,0,0,0,0,0, 1,1];
const encoded = fromBinaryArray(input);
console.log('encoded:', encoded);
const output = toBinaryArray(encoded);

const paddedInput = [ ...input, ...( Array((6 - (input.length % 6)) % 6).fill(0) ) ];
console.log(paddedInput.join());
console.log(output.join());

if (paddedInput.join() !== output.join()) throw Error('Oops!');

function fromBinaryArray(arr) {
    arr = [ ...arr, ...( Array((6 - (arr.length % 6)) % 6).fill(0) ) ]; // pad to chunk size
    let out = [], lut = [], num = 0;
    lut.add = function (from, to) { for (let i=from; i<=to; i++)
        this.push(String.fromCharCode(i)); return this }
    lut.add(48,57).add(65,90).add(94,95).add(97,122);
    for (let i=0; i<arr.length; i++) {
        if (i !== 0 && (i % 6) === 0) out.push(lut[num]), num = 0;
        if (arr[i] === 1) num += 1 << (i % 6);
    }
    out.push(lut[num]);
    return out.join('')
}

function toBinaryArray(encoded) {
    let out = [], lut = {};
    lut.add = function (from, to, shift) { for (let i=from; i<=to; i++)
        this[String.fromCharCode(i)] = i - shift; return this }
    lut.add(48,57,48).add(65,90,55).add(94,95,58).add(97,122,59);
    for (const char of encoded.split(''))
        for (let i=0; i<6; i++) out.push(+!!(lut[char] & (1 << i)));
    return out
}
