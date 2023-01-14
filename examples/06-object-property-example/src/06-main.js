import propertyGet from './06-property-get.js';
import propertySet from './06-property-get-and-set.js';

console.log(`Will use 'propertyGet.used': ${propertyGet.used}`);
console.log(`Will not use 'propertyGet.notUsed'.`);
console.log(`Will also use getter 'propertyGet.already': ${propertyGet.already}`);

console.log('propertySet.onlyGet', propertySet.onlyGet);
propertySet.onlySet = Math;
console.log('propertySet.onlySet = Math');

console.log('propertySet.getAndSet initially:', propertySet.getAndSet);
propertySet.getAndSet = 123;
console.log('propertySet.getAndSet now:', propertySet.getAndSet);

console.log(`Will not use 'propertySet.notGetOrSet'.`);

console.log('propertySet.already initially:', propertySet.already);
propertySet.already = true;
console.log('propertySet.already now:', propertySet.already);
