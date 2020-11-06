const anObject = {
  y: 'y',
  test: () => {
    return 'Adriano '
  }
}

const x = {
  __proto__: anObject,
  test() {
    return super.test() + 'Oliveira'
  }
}

console.log(x.test());