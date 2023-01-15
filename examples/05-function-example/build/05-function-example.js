class ClassMethodInstance {
  classMethodInstanceClassicCalled(doCallSecond) {
    console.log('First instance classic method will be used.');
    return doCallSecond && this.classMethodInstanceClassicNotCalled();
  }
  classMethodInstanceArrowBlockCalled = doCallSecond => {
    console.log('First instance arrow block method will be used.');
    return doCallSecond && this.classMethodInstanceArrowBlockNotCalled();
  };
  classMethodInstanceArrowNoBlockCalled = doCallSecond => {
    console.log('First instance arrow no block method will be used.') || doCallSecond && this.classMethodInstanceArrowNoBlockNotCalled();
  };
}
class ClassMethodStatic {
  static classMethodStaticClassicCalled(doCallSecond) {
    console.log('First static classic method will be used.');
    return doCallSecond && ClassMethodStatic.classMethodStaticClassicNotCalled();
  }
}
ClassMethodStatic.classMethodStaticArrowBlockCalled = doCallSecond => {
  console.log('First static arrow block method will be used.');
  return doCallSecond && ClassMethodStatic.classMethodStaticArrowBlockNotCalled();
};
ClassMethodStatic.classMethodStaticArrowNoBlockCalled = doCallSecond => {
  console.log('First static arrow no block method will be used.') || doCallSecond && ClassMethodStatic.classMethodStaticArrowNoBlockNotCalled();
};
const functionArrowBlockCalled = doCallSecond => {
  console.log('First arrow block function will be used.');
  return doCallSecond && functionArrowBlockNotCalled();
};
const functionArrowNoBlockCalled = doCallSecond => {
  console.log('First arrow no-block function will be used.') || doCallSecond && functionArrowNoBlockNotCalled();
};
function functionClassicCalled(doCallSecond) {
  console.log('First classic function will be used.');
  return doCallSecond && functionClassicNotCalled();
}
function functionClassicNotCalled() {}
const objectMethod = {
  objectMethodClassicCalled(doCallSecond) {
    console.log('First instance classic object method will be used.');
    return doCallSecond && objectMethod.objectMethodClassicNotCalled();
  },
  objectMethodArrowBlockCalled: doCallSecond => {
    console.log('First instance arrow block object method will be used.');
    return doCallSecond && objectMethod.objectMethodArrowBlockNotCalled();
  },
  objectMethodArrowNoBlockCalled: doCallSecond => {
    console.log('First instance arrow no block object method will be used.') || doCallSecond && objectMethod.objectMethodArrowNoBlockNotCalled();
  }
};
const doCallSecond = false;
const instance = new ClassMethodInstance();
instance.classMethodInstanceArrowBlockCalled(doCallSecond);
instance.classMethodInstanceArrowNoBlockCalled(doCallSecond);
instance.classMethodInstanceClassicCalled(doCallSecond);
ClassMethodStatic.classMethodStaticArrowBlockCalled(doCallSecond);
ClassMethodStatic.classMethodStaticArrowNoBlockCalled(doCallSecond);
ClassMethodStatic.classMethodStaticClassicCalled(doCallSecond);
functionArrowBlockCalled(doCallSecond);
functionArrowNoBlockCalled(doCallSecond);
functionClassicCalled(doCallSecond);
objectMethod.objectMethodArrowBlockCalled(doCallSecond);
objectMethod.objectMethodArrowNoBlockCalled(doCallSecond);
objectMethod.objectMethodClassicCalled(doCallSecond);


// Weenify passes needed: 2
