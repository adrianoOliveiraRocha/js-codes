const request = require('request')
const cheerio = require('cheerio')

request('https://w3software.net.br', (err, response, html) => {
  if(!err && response.statusCode == 200) {
    const $ = cheerio.load(html)
    const jumbotron = $('.jumbotron')
    // console.log(jumbotron.html())
    // console.log(jumbotron.text())
    // const output = jumbotron.find('h1').text()
    const output = jumbotron.children('h1').text()

    console.log(output)

  }
})
