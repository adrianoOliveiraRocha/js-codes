var natural = require('natural');

/**
tokenizer = new natural.TreebankWordTokenizer();
console.log(tokenizer.tokenize("Você precisa fazer isso em português."));

tokenizer1 = new natural.RegexpTokenizer({pattern: /\-/});
console.log(tokenizer1.tokenize("João, Você precisa fazer isso em português."));

tokenizer2 = new natural.WordPunctTokenizer();
console.log(tokenizer2.tokenize("João, Você precisa fazer isso em português."));

tokenizer3 = new natural.OrthographyTokenizer({language: "pt"});
console.log(tokenizer3.tokenize("João, Você precisa fazer isso em português."));
 */

tokenize4 = new natural.AggressiveTokenizerPt()
console.log(tokenize4.tokenize("João e Arimatéia sabem falar português. Isso é bom"))