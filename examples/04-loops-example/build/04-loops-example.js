function loopsForClassic(zero, one, two) {
  for (let i = zero; i < two; i++) {
    console.log('1 of 7: 04-loops-for-classic: First classic for loop (block) - will be used.');
  }
  for (let i = zero; i < two; i++) {
    console.log('2 of 7: 04-loops-for-classic: Second classic for loop (no block) - will also be used.');
  }
}
function loopsForIn(fullObj, emptyObj) {
  for (const key in fullObj) {
    console.log('3 of 7: 04-loops-for-in: First for in loop (block) - will be used.', key, fullObj[key]);
  }
  for (const key in fullObj) {
    console.log('4 of 7: 04-loops-for-in: Second for in loop (no block) - will also be used.', key, fullObj[key]);
  }
}
function loopsForOf(fullArr, emptyArr) {
  for (const val of fullArr) {
    console.log('5 of 7: 04-loops-for-of: First for of loop (block) - will be used.', val);
  }
  for (const val of fullArr) {
    console.log('6 of 7: 04-loops-for-of: Second for of loop (no block) - will also be used.', val);
  }
  for (const val of emptyArr) {}
  for (const val of emptyArr) {}
}
function loopsWhile(a, b) {
  while (a) {
    console.log('7 of 7: 04-loops-while: First and second while loops will both be used.');
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


// Weenify passes needed: 2
