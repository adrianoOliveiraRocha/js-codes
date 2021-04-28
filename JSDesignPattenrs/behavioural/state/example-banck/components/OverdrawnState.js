'strict'

class OverdrawnState {
  constructor(manager) {
    this.manager = manager
  }
  Deposit(amount) {
    this.manager.addToBalance(amount)
    if(this.manager.getBalance() > 0) {
      this.manager.moveToState(new GoodStandingStage(this.manager))
    }
  }
  Withdraw(amount) {
    this.manager.moveToState(new OnHold(this.manager))
    throw "Cannot withdraw money from an already overdrawn bank account"
  }
}

module.exports = OverdrawnState
