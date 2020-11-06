function run(number) {
  console.log(`I received ${number}`)
}

function doSomethingAsync(number) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(run(number))
    }, 1000)
  })
}

async function doSomething(number) {
  await doSomethingAsync(number)
}
console.log('Before')
doSomething(34)
console.log('After')