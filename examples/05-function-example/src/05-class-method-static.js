export default class ClassMethodStatic {
    static methodClassicCalled(doCallSecond) {
        console.log('First static classic method will be used.');
        return doCallSecond && ClassMethodStatic.methodClassicNotCalled();
    }
    static methodClassicNotCalled() {
        console.log('Second static classic method will not be used.');
    }    
}

ClassMethodStatic.methodArrowBlockCalled = (doCallSecond) => {
    console.log('First static arrow block method will be used.');
    return doCallSecond && ClassMethodStatic.methodArrowBlockNotCalled();
}

ClassMethodStatic.methodArrowBlockNotCalled = () => {
    console.log('Second static arrow block method will not be used.');
}    

ClassMethodStatic.methodArrowNoBlockCalled = (doCallSecond) =>
    console.log('First static arrow no block method will be used.')
        || doCallSecond
        && ClassMethodStatic.methodArrowNoBlockNotCalled()
    ;

ClassMethodStatic.methodArrowNoBlockNotCalled = () =>
    console.log('Second static arrow no block method will not be used.');
