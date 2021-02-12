'strict'

function Person() {
  let name = "Adriano";
  return {
    get: function() {
      return name;
    } 
  }
}

let p = new Person();
console.log(p.get());
console.log(p.name)




