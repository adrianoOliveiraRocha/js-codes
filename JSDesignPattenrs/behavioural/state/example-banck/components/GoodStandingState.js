'strict'

class GoodStandingState {
  constructor(manager) {
    this.manager = manager
  }
  Deposit(amount) {
    this.manager.addToBalance(amount)
  }
  Withdraw(amount) {
    if(this.manager.getBalance() < amount) {
      this.manager.moveToState(new OverdrawnState(this.manager))
    }
    this.manager.addToBalance(-1 * amount)
  }
}

module.exports = GoodStandingState
