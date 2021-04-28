'strict'
const GoodStandingState = require('./GoodStandingState')

class BankAccountManager {
  constructor() {
    console.log(GoodStandingStage)
//    this.currentState = new GoodStandingStage(this)
  }
  Deposit() {
    this.currentState.Deposit(amount)
  }
  Withdraw(amount) {
    this.currentState.Withdraw(amount)
  }
  addToBalance(amount) {
    this.balance += amount
  }
  getBalance() {
    return this.balance
  }
  moveToState(newState) {
    this.currentState = newState
  }
}

module.exports = BankAccountManager
