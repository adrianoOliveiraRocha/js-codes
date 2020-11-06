const addLogging = (fn) => {
    return (...args) => {
        console.log(`entering ${fn.name}: args: ${args}`)
        try {
            const valueToReturn = fn(...args)
            console.log(`existing ${fn.name}: ${valueToReturn}`)
            return valueToReturn
        } catch (error) {
            throw error
        }
    }
}

const addLogging3 = (fn, logger = console.log) => (...args) => {
    logger(`entering: ${fn.name}: ${args}`)
    try {
        const valueToReturn = fn(...args)
        logger(`exiting ${fn.name}: ${args}`)
        return valueToReturn
    } catch (error) {
        logger(`exiting ${fn.name}: throw ${error}`)
        throw error
    }
}

module.exports.addLogging = addLogging
module.exports.addLogging3 = addLogging3