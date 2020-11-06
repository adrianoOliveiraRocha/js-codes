/*
  Any async function always return a promise. 
*/

function promiseToDoSomething(number) {  
  return new Promise((resolve, reject) => {
    if (number > 0) {
      resolve(number * 10)
    } else if(number < 0) {
      resolve(number / 10)
    } else if(number == 0) {
      reject('This number cannot to be 0')
    }
  })
}

async function af0(number) {
  const response = await promiseToDoSomething(number)
  return response * 2
}

async function af1(number) {
  const response = await af0(number)
  return response * 3
}

af1(-10)
  .then(response => {
    console.log(response)
  })
  .catch(error => {
    console.error(error)
  })