export function functionClassicCalled(doCallSecond) {
    console.log('First classic function will be used.');
    return doCallSecond && functionClassicNotCalled();
}

export function functionClassicNotCalled() {
    console.log('Second classic function will not be used.');
}
