// Wait a little bit
setTimeout(() => {
  console.log('Do something')
}, 1000)


// Do something repeatedly
setInterval(() => {
  console.log('Do something')
}, 1000)


// With interval
var value = 0
const interval = setInterval(() => {
  value = value + 1
  if (value < 10) {
    console.log(value)
  } else {
    console.log('This is very interesting')
    clearInterval(interval)
  }
}, 1000)

/*
  If a function takes always the same amount of time, it's all fine.
  Maybe the function takes different execution times, depending on 
  network conditions for example. And maybe one long execution overlaps 
  the next one.
  To avoid this, you can schedule a recursive setTimeout to be called when
  the callback function finishes:
*/

function myFunction() {
  console.log('Do something')
  setTimeout(myFunction, 1000)
}

myFunction()

