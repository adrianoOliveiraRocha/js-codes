module.exports = op => {
    switch (op) {
        case "+":
            return (x, y) => x + y
        case "-":
            return (x, y) => x - y
        case "*":
            return (x, y) => x * y
        case "/":
            return (x, y) => x / y
    }
}