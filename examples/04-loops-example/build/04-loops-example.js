function loopsForClassic(zero, one, two) {
  for (let i = zero; i < two; i++) {
    console.log('First classic for loop (block) - will be used.');
  }
  for (let i = zero; i < two; i++) {
    console.log('Second classic for loop (no block) - will also be used.');
  }
}
function loopsForIn(fullObj, emptyObj) {
  for (const key in fullObj) {
    console.log('First for in loop (block) - will be used.', key);
  }
  for (const key in fullObj) {
    console.log('Second for in loop (no block) - will also be used.', key);
  }
}
function loopsForOf(fullArr, emptyArr) {
  for (const val of fullArr) {
    console.log('First for of loop (block) - will be used.', val);
  }
  for (const val of fullArr) {
    console.log('Second for of loop (no block) - will also be used.', val);
  }
  for (const val of emptyArr) {
    /* Weenified */
  }
  for (const val of emptyArr) {
    /* Weenified */
  }
}
function loopsWhile(a, b) {
  while (a) {
    console.log('First and second while loops will both be used.');
    break;
  }
}
loopsForClassic(0, 1, 2);
loopsForIn({
  a: 0,
  b: 1
});
loopsForOf(['a', 'b'], []);
loopsWhile(true);


// Weenify passes needed: 1
