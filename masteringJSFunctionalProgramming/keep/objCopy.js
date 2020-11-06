// you can use let myCopy = {...myObj}. 
const objCopy = obj => {
  let copy = Object.create(Object.getPrototypeOf(obj))
  Object.getOwnPropertyNames(obj).forEach(prop =>
    Object.defineProperty(
      copy,
      prop,
      Object.getOwnPropertyDescriptor(obj, prop)
    )
  )
  return copy
}

module.exports = objCopy