/*
  When you use Promisse.all, the result of the promises are obtained all 
  in the same time.
  With Promisse.race, you can choose which promise you want to run first
*/

const first = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      resolve('first')
    }, 500)
  }
)

const second = new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      resolve('second')
    }, 100)
  }
)

Promise.race([first, second]).then(
  (result) => {
    console.log(result)
  }
)
