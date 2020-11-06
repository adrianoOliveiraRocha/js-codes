const osmosis = require('osmosis')
let url = 'https://en.wikipedia.org/wiki/List_of_states_and_territories_of_the_United_States_by_population'


function scrapePopulations() {
  return new Promise((resolve, reject) => {
    let results = [];
    osmosis
    .get(url)
    .find('.wikitable:first tr:gt(0)')
    .set({
      state: 'td[3]',
      population: 'td[4]'
    })
    .data(item => results.push(item))
    .done(() => resolve(results));
  });
}

scrapePopulations().then(data => console.log(data));

// we can also get the same results more simply by wrapping the code with .set([])
osmosis
.get(url)
.set([
  osmosis
  .find('.wikitable:first tr:gt(0)')
  .set({
    state: 'td[3]',
    population: 'td[4]'
  })
])
.data(items => console.log(items))