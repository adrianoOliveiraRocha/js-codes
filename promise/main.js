function aFunction(number) {
  const response = number * 32 
  return new Promise((resolve, reject) => {
    if (response > 100) {
      resolve(response)
    } else {
      reject('This is a error!')
    }
  })
}

aFunction(24).then(result0 => {
  return result0 * 45
}).then(result1 => {
  return result1 * 67
}).then(result2 => {
  console.log(`This is my result2: ${result2}`)
  throw new Error('I had a problem here!')
})
.catch(error => {
  console.log(`Error: ${error}`)
})