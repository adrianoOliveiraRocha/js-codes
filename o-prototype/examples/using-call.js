function identify() {
  return this.name.toUpperCase();
}

function speak() {
  console.log("Hello, I'm " + identify.call(this));
}

var me = {
  name: 'Adriano Oliveira'
}

var you = {
  name: 'Anyone'
}

console.log(identify.call(me));
console.log(identify.call(you));

speak.call(me);
speak.call(you);
