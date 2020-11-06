'use strict'
const fs = require('fs')

function readFile(fileName) {
  let rawdata = fs.readFile(`./jsonFiles/${fileName}`, (err, data) => {
    if(err) {
      console.error(err)
    } else {
      const student = JSON.parse(data)
      console.log(student)
    }
  })
}

function writeFile() {
  let student = {
    "name": "Danielle",
    "age": 23,
    "gender": "Female",
    "department": "Portuguese",
    "car": "Fusca"
  }
  let data = JSON.stringify(student)
  fs.writeFileSync('./jsonFiles/student.json', data)
}

writeFile()
readFile('student.json')
