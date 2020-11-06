const memoize2 = fn => {
    if (fn.length === 1) {
        let cache = {}
        return x => (x in cache ? cache[x] : (cache[x] = fun(x)))
    } else {
        return fn
    }
}

module.exports = memoize2