function newCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const nc = newCounter();
console.log(nc());
console.log(nc());
console.log(nc());