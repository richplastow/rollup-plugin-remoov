const objectMethod = {
    objectMethodClassicCalled(doCallSecond) {
        console.log('10 of 12: 05-object-method: First instance classic object method will be used.');
        return doCallSecond && objectMethod.objectMethodClassicNotCalled();
    },
    objectMethodClassicNotCalled() {
        console.log('05-object-method: Second instance classic object method will not be used.');
    },

    objectMethodArrowBlockCalled: (doCallSecond) => {
        console.log('11 of 12: 05-object-method: First instance arrow block object method will be used.');
        return doCallSecond && objectMethod.objectMethodArrowBlockNotCalled();
    },
    objectMethodArrowBlockNotCalled: () => {
        console.log('05-object-method: Second instance arrow block object method will not be used.');
    },

    objectMethodArrowNoBlockCalled: (doCallSecond) =>
        console.log('12 of 12: 05-object-method: First instance arrow no block object method will be used.')
            || doCallSecond
            && objectMethod.objectMethodArrowNoBlockNotCalled()
    ,
    objectMethodArrowNoBlockNotCalled: () =>
        console.log('05-object-method: Second instance arrow no block object method will not be used.')
    ,
}

export default objectMethod;
