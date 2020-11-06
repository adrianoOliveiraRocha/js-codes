module.exports = (start, stop) => {
    return new Array(stop - start).fill(0).map((v, i) => {
        return start + i
    })
}