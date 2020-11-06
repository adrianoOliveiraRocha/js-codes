function calculating(value) {
  return value * 2
}

function promiseToDoSomething(value) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(calculating(value))
    }, 0)  
  })
}

async function f1(n) {
  const something = await promiseToDoSomething(n)
  return something * 2
}

async function f2(n) {
  const something = await f1(n)
  return something * 2
}

f2(2).then((res) => {
  console.log(res)
})