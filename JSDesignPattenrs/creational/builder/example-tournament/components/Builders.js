'strict'

const Event = require('./Event')
const Attendee = require('./Attendee')
const Tournament = require('./Tournament')
const Prize = require('./Prize')

const LannisterTournamentBuilder = (function () {
	
	function LannisterTournamentBuilder() {
		//...
	}

	LannisterTournamentBuilder.prototype.build = function () {
		let tournament = new Tournament()
		tournament.events.push(new Event("Joust"))
		tournament.events.push(new Event("Melee"))
		tournament.attendees.push(new Attendee("Jamie"))
		tournament.prizes.push(new Prize("Gold"))
		tournament.prizes.push(new Prize("More Gold"))
		return tournament
	}

	return LannisterTournamentBuilder

})()

const BaratheonTournamentBuilder = (function () {

	function BaratheonTournamentBuilder() {
		//...
	}

	BaratheonTournamentBuilder.prototype.build = function () {
		let tournament = new Tournament()
		tournament.events.push(new Event("Joust"))
		tournament.events.push(new Event("Melee"))
		tournament.attendees.push(new Event("Stannis"))
		tournament.attendees.push(new Event("Robert"))
		tournament.prizes.push(new Prize("Prize 1"))
		tournament.prizes.push(new Prize("Prize 2"))
		return tournament
	}

	return BaratheonTournamentBuilder

})()

const TournamentBuilder = (function () {
	
	function TournamentBuilder() {
		//...
	}

	TournamentBuilder.prototype.build = function(builder) {
		return builder.build()
	}

	return TournamentBuilder;

})()

module.exports.TournamentBuilder = TournamentBuilder
module.exports.LannisterTournamentBuilder = LannisterTournamentBuilder
module.exports.BaratheonTournamentBuilder = BaratheonTournamentBuilder