'strict'
/*
Each tournament has a complicated setup involving the events, the attendees, and the prizes
*/

const Builders = require('./components/Builders')

const tournamentBuilder1 = new Builders.TournamentBuilder()
const lannisterTournament = tournamentBuilder1.build(new Builders.LannisterTournamentBuilder())
console.log(lannisterTournament)
console.log("\n")
const tournamentBuilder2 = new Builders.TournamentBuilder()
const baratheonTournament = tournamentBuilder2.build(new Builders.BaratheonTournamentBuilder()) 
console.log(baratheonTournament)