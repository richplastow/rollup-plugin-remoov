class ClassMethodInstance {
  methodClassicCalled(doCallSecond) {
    console.log('First instance classic method will be used.');
    return doCallSecond && this.methodClassicNotCalled();
  }
  methodClassicNotCalled() {
    /* Weenified */
  }
  methodArrowBlockCalled = doCallSecond => {
    console.log('First instance arrow block method will be used.');
    return doCallSecond && this.methodArrowBlockNotCalled();
  };
  methodArrowBlockNotCalled = () => {
    /* Weenified */
  };
  methodArrowNoBlockCalled = doCallSecond => {
    console.log('First instance arrow no block method will be used.') || doCallSecond && this.methodArrowNoBlockNotCalled();
  };
  methodArrowNoBlockNotCalled = () => {
    /* Weenified */
  };
}
class ClassMethodStatic {
  static methodClassicCalled(doCallSecond) {
    console.log('First static classic method will be used.');
    return doCallSecond && ClassMethodStatic.methodClassicNotCalled();
  }
  static methodClassicNotCalled() {
    /* Weenified */
  }
}
ClassMethodStatic.methodArrowBlockCalled = doCallSecond => {
  console.log('First static arrow block method will be used.');
  return doCallSecond && ClassMethodStatic.methodArrowBlockNotCalled();
};
ClassMethodStatic.methodArrowBlockNotCalled = () => {
  /* Weenified */
};
ClassMethodStatic.methodArrowNoBlockCalled = doCallSecond => {
  console.log('First static arrow no block method will be used.') || doCallSecond && ClassMethodStatic.methodArrowNoBlockNotCalled();
};
ClassMethodStatic.methodArrowNoBlockNotCalled = () => {
  /* Weenified */
};
const functionArrowBlockCalled = doCallSecond => {
  console.log('First arrow block function will be used.');
  return doCallSecond && functionArrowBlockNotCalled();
};
const functionArrowBlockNotCalled = () => {
  /* Weenified */
};
const functionArrowNoBlockCalled = doCallSecond => {
  console.log('First arrow no-block function will be used.') || doCallSecond && functionArrowNoBlockNotCalled();
};
const functionArrowNoBlockNotCalled = () => {
  /* Weenified */
};
function functionClassicCalled(doCallSecond) {
  console.log('First classic function will be used.');
  return doCallSecond && functionClassicNotCalled();
}
function functionClassicNotCalled() {
  /* Weenified */
}
const objectMethod = {
  methodClassicCalled(doCallSecond) {
    console.log('First instance classic method will be used.');
    return doCallSecond && objectMethod.methodClassicNotCalled();
  },
  methodClassicNotCalled() {
    /* Weenified */
  },
  methodArrowBlockCalled: doCallSecond => {
    console.log('First instance arrow block method will be used.');
    return doCallSecond && objectMethod.methodArrowBlockNotCalled();
  },
  methodArrowBlockNotCalled: () => {
    /* Weenified */
  },
  methodArrowNoBlockCalled: doCallSecond => {
    console.log('First instance arrow no block method will be used.') || doCallSecond && objectMethod.methodArrowNoBlockNotCalled();
  },
  methodArrowNoBlockNotCalled: () => {
    /* Weenified */
  }
};
const doCallSecond = false;
const instance = new ClassMethodInstance();
instance.methodArrowBlockCalled(doCallSecond);
instance.methodArrowNoBlockCalled(doCallSecond);
instance.methodClassicCalled(doCallSecond);
ClassMethodStatic.methodArrowBlockCalled(doCallSecond);
ClassMethodStatic.methodArrowNoBlockCalled(doCallSecond);
ClassMethodStatic.methodClassicCalled(doCallSecond);
functionArrowBlockCalled(doCallSecond);
functionArrowNoBlockCalled(doCallSecond);
functionClassicCalled(doCallSecond);
objectMethod.methodArrowBlockCalled(doCallSecond);
objectMethod.methodArrowNoBlockCalled(doCallSecond);
objectMethod.methodClassicCalled(doCallSecond);


// Weenify passes needed: 1
