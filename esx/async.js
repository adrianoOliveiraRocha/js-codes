const operation = (n) => {
  console.log(`operation receiving ${n}`);
  return n * 2;
}

function promiseToDoSomething(operation, value) {
  return new Promise((resolve) => {
    setTimeout(resolve(operation(value)), 0);
  })
}

async function first() {
  const value = await promiseToDoSomething(operation, 2)
  console.log(`Inside the function first the value is ${value}`)
  return value * 2
}

async function second() {
  const value = await first()
  console.log(`Inside the function second the value is ${value}`)
  return value * 2
}

async function third() {
  const value = await second()
  throw new Error('Oops! I have a problem :-(');
}

third()
.then((res) => {
  console.log(res)
})
.catch((err) => {
  console.log(`I am getting this in statement catch: ${err}`);
})
