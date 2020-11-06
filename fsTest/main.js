const fs = require('fs')

function searchDir() {
  return new Promise((resolve, reject) => {
    fs.readdir("images", (error, result) => {
      if (error) {
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}

async function searchFile() {
  const allFiles = await searchDir()
  return allFiles 
}

async function fileName() {
  const allFiles = await searchFile()
  var fileName = undefined
  Object.values(allFiles).forEach(item => {
    if (item.includes("mylogo")) {
      fileName = item
    }
  })
  return fileName
}

fileName().then(fileName => {
  const path = __dirname + "/images/mylogo.png"
  console.log(path)
})


