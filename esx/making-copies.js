const a = [1, 2, 3]
const b = [...a, 4, 5, 6]
const c = [...a] // copying 

let obj1 = {
  'name': 'Adriano',
  'profession1': 'Pianist',
  'profession1': 'JavaScript Programmer'
}
let obj2 = {...obj1} // copying 
for (const key in obj2) {
  console.log(obj2[key])
}

let me = 'I am Adriano Oliveira. JavaScript Programmer and Pianist'
let meArray = [...me] // become a string in a array
meArray.forEach((element => {
  console.log(element)
}))