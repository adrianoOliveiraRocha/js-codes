const natural = require('natural')

natural.LancasterStemmer.attach();
console.log("Eu estava interessado em fechar os portões".tokenizeAndStem());
console.log("portão".stem());