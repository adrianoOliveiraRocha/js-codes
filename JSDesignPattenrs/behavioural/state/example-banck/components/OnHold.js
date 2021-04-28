'strict'

class OnHold {
  constructor(manager) {
    this.manager = manager
  }
  Deposit(amount) {
    this.manager.addToBalance(amount)
    throw "Your account is on hold and you must attend the bank to resolve the issue"
  }
  Withdraw(amount) {
    throw "Your account is on hold and you must attend the bank to resolve the issue"
  }
}

module.exports = OnHold
