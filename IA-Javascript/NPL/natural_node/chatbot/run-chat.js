const natural = require('natural')
const classifier = new natural.BayesClassifier()
const trining = require('./training.json')

trining.forEach(item => {
  classifier.addDocument(item.clientTalk, item.response)
})

classifier.train()

let response = classifier.classify('novo treinamento')
console.log(response)
