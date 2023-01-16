class ClassMethodInstance {
  classMethodInstanceArrowBlockNotCalled = () => {
    console.log('05-class-method-instance: Second instance arrow block method will not be used.');
  };
  classMethodInstanceArrowNoBlockCalled = doCallSecond => {
    console.log('3 of 12: 05-class-method-instance: First instance arrow no block method will be used.') || doCallSecond && this.classMethodInstanceArrowNoBlockNotCalled();
  };
}
class ClassMethodStatic {}
ClassMethodStatic.classMethodStaticArrowBlockNotCalled = () => {
  console.log('05-class-method-static: Second static arrow block method will not be used.');
};
ClassMethodStatic.classMethodStaticArrowNoBlockCalled = doCallSecond => {
  console.log('6 of 12: 05-class-method-static: First static arrow no block method will be used.') || doCallSecond && ClassMethodStatic.classMethodStaticArrowNoBlockNotCalled();
};
const functionArrowBlockCalled = doCallSecond => {
  console.log('7 of 12: 05-function-arrow: First arrow block function will be used.');
  return doCallSecond && functionArrowBlockNotCalled();
};
const functionArrowNoBlockCalled = doCallSecond => {
  console.log('8 of 12: 05-function-arrow: First arrow no-block function will be used.') || doCallSecond && functionArrowNoBlockNotCalled();
};
function functionClassicCalled(doCallSecond) {
  console.log('9 of 12: 05-function-classic: First classic function will be used.');
  return doCallSecond && functionClassicNotCalled();
}
function functionClassicNotCalled() {}
const objectMethod = {
  objectMethodArrowBlockNotCalled: () => {
    console.log('05-object-method: Second instance arrow block object method will not be used.');
  },
  objectMethodArrowNoBlockCalled: doCallSecond => {
    console.log('12 of 12: 05-object-method: First instance arrow no block object method will be used.') || doCallSecond && objectMethod.objectMethodArrowNoBlockNotCalled();
  }
};
const doCallSecond = false;
const instance = new ClassMethodInstance();
instance.classMethodInstanceClassicCalled(doCallSecond);
instance.classMethodInstanceArrowBlockCalled(doCallSecond);
instance.classMethodInstanceArrowNoBlockCalled(doCallSecond);
ClassMethodStatic.classMethodStaticClassicCalled(doCallSecond);
ClassMethodStatic.classMethodStaticArrowBlockCalled(doCallSecond);
ClassMethodStatic.classMethodStaticArrowNoBlockCalled(doCallSecond);
functionArrowBlockCalled(doCallSecond);
functionArrowNoBlockCalled(doCallSecond);
functionClassicCalled(doCallSecond);
objectMethod.objectMethodClassicCalled(doCallSecond);
objectMethod.objectMethodArrowBlockCalled(doCallSecond);
objectMethod.objectMethodArrowNoBlockCalled(doCallSecond);


// Weenify passes needed: 3
