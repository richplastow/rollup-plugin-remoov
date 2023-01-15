const objectMethod = {
    objectMethodClassicCalled(doCallSecond) {
        console.log('First instance classic object method will be used.');
        return doCallSecond && objectMethod.objectMethodClassicNotCalled();
    },
    objectMethodClassicNotCalled() {
        console.log('Second instance classic object method will not be used.');
    },

    objectMethodArrowBlockCalled: (doCallSecond) => {
        console.log('First instance arrow block object method will be used.');
        return doCallSecond && objectMethod.objectMethodArrowBlockNotCalled();
    },
    objectMethodArrowBlockNotCalled: () => {
        console.log('Second instance arrow block object method will not be used.');
    },

    objectMethodArrowNoBlockCalled: (doCallSecond) =>
        console.log('First instance arrow no block object method will be used.')
            || doCallSecond
            && objectMethod.objectMethodArrowNoBlockNotCalled()
    ,
    objectMethodArrowNoBlockNotCalled: () =>
        console.log('Second instance arrow no block object method will not be used.')
    ,
}

export default objectMethod;
