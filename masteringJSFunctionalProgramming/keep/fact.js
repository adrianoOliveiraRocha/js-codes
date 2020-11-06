// fact
function fact(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}
console.log(fact(5)); // 120

// fact2. arrow function
const fact2 = n => {
    if (n === 0) {
        return 1;
    } else {
        return n * fact2(n - 1);
    }
};

// fact3
const fact3 = n => (n === 0 ? 1 : n * fact3(n - 1));


const range = require('./range')
const fact4 = n => {
    let result = 1
    range(1, n + 1).forEach(v => (result *= v))
    return result
}