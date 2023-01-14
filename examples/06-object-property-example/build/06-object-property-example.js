const propertyGet = {
  used: 'yep',
  get already() {
    return 'was already a getter, so should remain so';
  }
};
const propertyGetAndSet = {
  onlyGet: 'this will only be getted',
  onlySet: 'this will only be setted',
  'getAndSet': 'this will be setted and getted',
  get already() {
    return typeof this._already === 'undefined' ? 99 : this._already;
  },
  set already(val) {
    this._already = val;
  }
};
console.log(`Will use 'propertyGet.used': ${propertyGet.used}`);
console.log(`Will not use 'propertyGet.notUsed'.`);
console.log(`Will also use getter 'propertyGet.already': ${propertyGet.already}`);
console.log('propertySet.onlyGet', propertyGetAndSet.onlyGet);
propertyGetAndSet.onlySet = Math;
console.log('propertySet.onlySet = Math');
console.log('propertySet.getAndSet initially:', propertyGetAndSet.getAndSet);
propertyGetAndSet.getAndSet = 123;
console.log('propertySet.getAndSet now:', propertyGetAndSet.getAndSet);
console.log(`Will not use 'propertySet.notGetOrSet'.`);
console.log('propertySet.already initially:', propertyGetAndSet.already);
propertyGetAndSet.already = true;
console.log('propertySet.already now:', propertyGetAndSet.already);


// Weenify passes needed: 3
