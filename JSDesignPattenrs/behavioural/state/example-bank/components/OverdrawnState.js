'strict'

//const GoodStandingState = require('./GoodStandingState')
const OnHold = require('./OnHold')

class OverdrawnState {
  constructor(manager) {
    this.manager = manager
  }
  Deposit(amount) {
    console.log("\n")
    console.log(GoodStandingState)
    console.log("\n")
    this.manager.addToBalance(amount)
    if(this.manager.getBalance() > 0) {
      this.manager.moveToState(new GoodStandingState(this.manager))
    }
  }
  Withdraw(amount) {
    this.manager.moveToState(new OnHold(this.manager))
    throw "Cannot withdraw money from an already overdrawn bank account"
  }
}

module.exports = OverdrawnState
