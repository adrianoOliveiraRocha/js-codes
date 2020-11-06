// Example 1
let rabbit = {};

const speak = function(line) {
  console.log(`The ${this.type} rabbit says ${line}`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and wiskers, how lete is getting!");
hungryRabbit.speak("I could use the carrot rigth now.");

speak.call(hungryRabbit, "Burp!");
speak.call(whiteRabbit, "You are a bad rabbit");

// Example 2
function normalize() {
  console.log(this.length);
  console.log(this.coords.map(n => n / this.length));
};

normalize.call({coords: [0, 2, 3], length: 5});
//If I had written the argument to map using the function keyword, the code
//wouldn’t work

