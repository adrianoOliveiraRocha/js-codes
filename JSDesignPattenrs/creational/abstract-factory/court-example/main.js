'strict'
const Factories = require('./components/Factories')
const CourtSession = require('./components/CourtSession') 

let courtSession1 = new CourtSession(new Factories.TargaryenFactory())
courtSession1.complaintPresented({severity: 8})

let courtSession2 = new CourtSession(new Factories.TargaryenFactory())
courtSession2.complaintPresented({severity: 12})

let courtSession3 = new CourtSession(new Factories.LennisterFactory())
courtSession3.complaintPresented({severity: 8})

let courtSession4 = new CourtSession(new Factories.LennisterFactory())
courtSession4.complaintPresented({severity: 12})