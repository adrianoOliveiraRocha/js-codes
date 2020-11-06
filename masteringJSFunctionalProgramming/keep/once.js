// const speak = a => console.log(a, ' speak!!')
// speak('original')
// speak('original')
// speak('original')
// console.log('Test once:')
// const speakOnce = once(speak)
// speakOnce('original')
// speakOnce('original')
// speakOnce('original')

const once = fn => {
    /* At first, you received a function. Then, you have another function 
    that will run just one time*/
    let done = false
    return (...args) => {
        if (!done) {
            done = true
            fn(...args)
        }
    }
}

const once2 = func => {
    let done = false
    let result
    return (...args) => {
        if (!done) {
            done = true
            result = func(...args)
        }
        return result
    }
}

const onceAndAfter = (f, g) => {
    let done = false
    return (...args) => {
        if (!done) {
            done = true
            return f(...args)
        } else {
            return g(...args)
        }
    }
}

const onceAndAfter2 = (f, g) => {
    let toCall = f
    return (...args) => {
        let result = toCall(...args)
        toCall = g;
        return result
    }
}

module.exports.once = once
module.exports.once2 = once2
module.exports.onceAndAfter = onceAndAfter
module.exports.onceAndAfter2 = onceAndAfter2