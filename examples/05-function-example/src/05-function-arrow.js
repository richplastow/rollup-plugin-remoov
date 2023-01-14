export const functionArrowBlockCalled = (doCallSecond) => {
    console.log('First arrow block function will be used.');
    return doCallSecond && functionArrowBlockNotCalled();
}

const functionArrowBlockNotCalled = () => {
    console.log('Second arrow block function will not be used.');
}

export const functionArrowNoBlockCalled = (doCallSecond) =>
    console.log('First arrow no-block function will be used.')
        || doCallSecond
        && functionArrowNoBlockNotCalled()
    ;

const functionArrowNoBlockNotCalled = () =>
    console.log('Second arrow no-block function will not be used.');
