export function functionClassicCalled(doCallSecond) {
    console.log('9 of 12: 05-function-classic: First classic function will be used.');
    return doCallSecond && functionClassicNotCalled();
}

export function functionClassicNotCalled() {
    console.log('05-function-classic: Second classic function will not be used.');
}
