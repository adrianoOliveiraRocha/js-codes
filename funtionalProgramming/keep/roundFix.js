const roundFix1 = (function() {
    let accum = 0; // this variable could be global. But it isn't. Then this function is pure
    return n => {
        let nRounded = accum > 0 ? Math.ceil(n) : Math.floor(n);
        accum += n - nRounded;
        console.log("accum", accum.toFixed(5), " result", nRounded);
        return nRounded;
    };
})();

const roundFix2 = (a, n) => {
    console.log(a, n);
    let r = a > 0 ? Math.ceil(n) : Math.floor(n);
    a += n - r;
    return { a, r };
}

module.exports = roundFix1;