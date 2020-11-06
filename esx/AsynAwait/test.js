// function doSomethingAsync() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('I did something')
//     }, 900)
//   })
// }

// async function doSomething() {
//   console.log(await doSomethingAsync())
// }

// doSomething()

function doSomethingAsync() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('I did something')
    }, 3000)
  })
}

async function doSomething() {
  console.log(await doSomethingAsync())
}

console.log('Before')
doSomehing()
console.log('After')