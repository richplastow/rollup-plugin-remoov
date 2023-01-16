export default class ClassMethodStatic {
    static classMethodStaticClassicCalled(doCallSecond) {
        console.log('4 of 12: 05-class-method-static: First static classic method will be used.');
        return doCallSecond && ClassMethodStatic.classMethodStaticClassicNotCalled();
    }
    static classMethodStaticClassicNotCalled() {
        console.log('05-class-method-static: Second static classic method will not be used.');
    }    
}

ClassMethodStatic.classMethodStaticArrowBlockCalled = (doCallSecond) => {
    console.log('5 of 12: 05-class-method-static: First static arrow block method will be used.');
    return doCallSecond && ClassMethodStatic.classMethodStaticArrowBlockNotCalled();
}

ClassMethodStatic.classMethodStaticArrowBlockNotCalled = () => {
    console.log('05-class-method-static: Second static arrow block method will not be used.');
}    

ClassMethodStatic.classMethodStaticArrowNoBlockCalled = (doCallSecond) =>
    console.log('6 of 12: 05-class-method-static: First static arrow no block method will be used.')
        || doCallSecond
        && ClassMethodStatic.classMethodStaticArrowNoBlockNotCalled()
    ;

ClassMethodStatic.classMethodStaticArrowNoBlockNotCalled = () =>
    console.log('05-class-method-static: Second static arrow no block method will not be used.');
