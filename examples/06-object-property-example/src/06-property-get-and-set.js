const propertyGetAndSet = {
    onlyGet: 'this will only be getted',
    onlySet: 'this will only be setted',
    'getAndSet': 'this will be setted and getted',
    notGetOrSet: 'this will not be getted or setted - so will be removed',
    get already() { return typeof this._already === 'undefined' ? 99 : this._already },
    set already(val) { this._already = val },
}

export default propertyGetAndSet;
