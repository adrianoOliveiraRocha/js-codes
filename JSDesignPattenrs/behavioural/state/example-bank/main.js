'strict'
const BankAccountManager = require('./components/BankAccountManager')
const GoodStandingState = require('./components/GoodStandingState')
const OnHold = require('./components/OnHold')
const OverdrawnState = require('./components/OverdrawnState')

const bankAccountManager = new BankAccountManager()

console.log(bankAccountManager.Deposit(500))
console.log(bankAccountManager.getBalance())

console.log(bankAccountManager.Withdraw(600))
console.log(bankAccountManager.getBalance())

console.log(bankAccountManager.Withdraw(100))
console.log(bankAccountManager.getBalance())
