'strict'

const GoodStandingState = require('./GoodStandingState')

class BankAccountManager {
  constructor() {
    this.balance = 0
    this.currentState = new GoodStandingState(this)
  }
  Deposit(amount) {
    this.currentState.Deposit(amount)
    console.log("Current State: ", this.currentState.constructor.name)
  }
  Withdraw(amount) {
    this.currentState.Withdraw(amount)
    console.log("Current State: ", this.currentState.constructor.name)
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

