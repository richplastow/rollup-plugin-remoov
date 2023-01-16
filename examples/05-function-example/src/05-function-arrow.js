export const functionArrowBlockCalled = (doCallSecond) => {
    console.log('7 of 12: 05-function-arrow: First arrow block function will be used.');
    return doCallSecond && functionArrowBlockNotCalled();
}

const functionArrowBlockNotCalled = () => {
    console.log('05-function-arrow: Second arrow block function will not be used.');
}

export const functionArrowNoBlockCalled = (doCallSecond) =>
    console.log('8 of 12: 05-function-arrow: First arrow no-block function will be used.')
        || doCallSecond
        && functionArrowNoBlockNotCalled()
    ;

const functionArrowNoBlockNotCalled = () =>
    console.log('05-function-arrow: Second arrow no-block function will not be used.');
