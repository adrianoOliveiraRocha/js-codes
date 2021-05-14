'strict'

const Event = require('./Event')
const Attendee = require('./Attendee')
const Tournament = require('./Tournament')

const LannisterTournamentBuilder = (function () {
	
	function LannisterTournamentBuilder() {
		//...
	}

	LannisterTournamentBuilder.prototype.build = function () {
		let tournament = new Tournament()
		tournament.events.push(new Event("Joust"))
		tournament.events.push(new Event("Melee"))
		tournament.attendees.push(new Attendee("Jamie"))
		

	}

	return LannisterTournamentBuilder

})()