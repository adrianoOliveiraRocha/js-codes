'strict'
const Factories = require('./components/Factories')
const CourtSession = require('./components/CourtSession') 

let courtSession1 = new CourtSession(new Factories.TargaryenFactory())
courtSession1.complaintPresented({severity: 8})