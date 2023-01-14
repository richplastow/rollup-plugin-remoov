export default class ClassMethodInstance {
    methodClassicCalled(doCallSecond) {
        console.log('First instance classic method will be used.');
        return doCallSecond && this.methodClassicNotCalled();
    }
    methodClassicNotCalled() {
        console.log('Second instance classic method will not be used.');
    }

    methodArrowBlockCalled = (doCallSecond) => {
        console.log('First instance arrow block method will be used.');
        return doCallSecond && this.methodArrowBlockNotCalled();
    }
    methodArrowBlockNotCalled = () => {
        console.log('Second instance arrow block method will not be used.');
    }    

    methodArrowNoBlockCalled = (doCallSecond) =>
        console.log('First instance arrow no block method will be used.')
            || doCallSecond
            && this.methodArrowNoBlockNotCalled()
        ;
    methodArrowNoBlockNotCalled = () =>
        console.log('Second instance arrow no block method will not be used.');
}
