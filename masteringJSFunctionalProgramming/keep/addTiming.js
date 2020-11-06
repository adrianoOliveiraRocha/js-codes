/*
How to use this:

let testFib = memoize(fib)
addTiming(testFib)(45) // normal exit 14115 ms
addTiming(testFib)(40) // normal exit 1268 ms
addTiming(testFib)(35) // normal exit 114 ms

*/

const myPut = (text, name, tStart, tEnd) =>
    console.log(`${name} - ${text} ${tEnd - tStart} ms`)

const myGet = () => Date.now()

const addTiming = (fn, getTime = myGet, output = myPut) => (...args) => {
    let tStart = getTime()
    try {
        const valueToReturn = fn(...args)
        output("normal exit", fn.name, tStart, getTime())
        return valueToReturn
    } catch (thrownError) {
        output("exception thrown", fn.name, tStart, getTime())
        throw thrownError
    }
}

module.exports = addTiming