export default class ClassMethodStatic {
    static classMethodStaticClassicCalled(doCallSecond) {
        console.log('First static classic method will be used.');
        return doCallSecond && ClassMethodStatic.classMethodStaticClassicNotCalled();
    }
    static classMethodStaticClassicNotCalled() {
        console.log('Second static classic method will not be used.');
    }    
}

ClassMethodStatic.classMethodStaticArrowBlockCalled = (doCallSecond) => {
    console.log('First static arrow block method will be used.');
    return doCallSecond && ClassMethodStatic.classMethodStaticArrowBlockNotCalled();
}

ClassMethodStatic.classMethodStaticArrowBlockNotCalled = () => {
    console.log('Second static arrow block method will not be used.');
}    

ClassMethodStatic.classMethodStaticArrowNoBlockCalled = (doCallSecond) =>
    console.log('First static arrow no block method will be used.')
        || doCallSecond
        && ClassMethodStatic.classMethodStaticArrowNoBlockNotCalled()
    ;

ClassMethodStatic.classMethodStaticArrowNoBlockNotCalled = () =>
    console.log('Second static arrow no block method will not be used.');
