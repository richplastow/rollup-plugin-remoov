export default class ClassMethodInstance {
    classMethodInstanceClassicCalled(doCallSecond) {
        console.log('1 of 12: 05-class-method-instance: First instance classic method will be used.');
        return doCallSecond && this.classMethodInstanceClassicNotCalled();
    }
    classMethodInstanceClassicNotCalled() {
        console.log('05-class-method-instance: Second instance classic method will not be used.');
    }

    classMethodInstanceArrowBlockCalled = (doCallSecond) => {
        console.log('2 of 12: 05-class-method-instance: First instance arrow block method will be used.');
        return doCallSecond && this.classMethodInstanceArrowBlockNotCalled();
    }
    classMethodInstanceArrowBlockNotCalled = () => {
        console.log('05-class-method-instance: Second instance arrow block method will not be used.');
    }    

    classMethodInstanceArrowNoBlockCalled = (doCallSecond) =>
        console.log('3 of 12: 05-class-method-instance: First instance arrow no block method will be used.')
            || doCallSecond
            && this.classMethodInstanceArrowNoBlockNotCalled()
        ;
    classMethodInstanceArrowNoBlockNotCalled = () =>
        console.log('05-class-method-instance: Second instance arrow no block method will not be used.');
}
