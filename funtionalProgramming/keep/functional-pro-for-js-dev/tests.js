function validateDataForAge(data) {
  let person = data()
  console.log(person)
  if(person.age < 1 || person.age > 99) {
    return true
  } else {
    return false
  }
}

function errorHandlerForAge(error) {
  console.error(`Oops: ${error}`);
}

function parseRequest(data, validateData, errorHandler) {
  let error = validateData(data)
  if(!error) {
    console.error("nos errors");
  } else {
    errorHandler(error)
  }
}

function generateDataForScientist() {
  return {
    name: "Albert Einstein",
    age : Math.floor(Math.random() * (100 - 1)) + 1,
  }
}

function generateDataForComposer() {
  return {
    name: "J S Bach",
    age : Math.floor(Math.random() * (100 - 1)) + 1,
  }
}

parseRequest(generateDataForScientist, validateDataForAge,
errorHandlerForAge);

parseRequest(generateDataForComposer, validateDataForAge,
errorHandlerForAge);