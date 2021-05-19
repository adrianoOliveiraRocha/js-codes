'strict'

const Prayer = require('./components/Prayer')

let prayer = new Prayer()
const god = prayer.pray("watery")
god.prayTo()