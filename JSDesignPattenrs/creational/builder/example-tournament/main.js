'strict'
/*
Each tournament has a complicated setup involving the events, the attendees, and the prizes
*/

// const Builders = require('./components/Builders')

// const tournamentBuilder = new Builders.TournamentBuilder()
// tournamentBuilder.build(new Builders.LannisterTournamentBuilder())

const Event = require('./components/Event')

let event = new Event('Test')
console.log(event.name)