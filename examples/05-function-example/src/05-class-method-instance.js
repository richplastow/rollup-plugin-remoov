export default class ClassMethodInstance {
    classMethodInstanceClassicCalled(doCallSecond) {
        console.log('First instance classic method will be used.');
        return doCallSecond && this.classMethodInstanceClassicNotCalled();
    }
    classMethodInstanceClassicNotCalled() {
        console.log('Second instance classic method will not be used.');
    }

    classMethodInstanceArrowBlockCalled = (doCallSecond) => {
        console.log('First instance arrow block method will be used.');
        return doCallSecond && this.classMethodInstanceArrowBlockNotCalled();
    }
    classMethodInstanceArrowBlockNotCalled = () => {
        console.log('Second instance arrow block method will not be used.');
    }    

    classMethodInstanceArrowNoBlockCalled = (doCallSecond) =>
        console.log('First instance arrow no block method will be used.')
            || doCallSecond
            && this.classMethodInstanceArrowNoBlockNotCalled()
        ;
    classMethodInstanceArrowNoBlockNotCalled = () =>
        console.log('Second instance arrow no block method will not be used.');
}
