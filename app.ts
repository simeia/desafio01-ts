import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { VipAccount } from './class/VipAccount'


console.log("People Account - deposito + saque")
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount.getName())
peopleAccount.deposit(120)
peopleAccount.withdraw(100)
peopleAccount.getBalance()

console.log("-----------------------------------")
console.log("Company Account - deposito + emprestimo")
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(companyAccount.getName())
companyAccount.deposit(200)
companyAccount.getLoan(55)
companyAccount.withdraw(70)
companyAccount.getBalance()

console.log("-----------------------------------")
console.log("Vip Account - depósito + premiação e 10")
const vipAccount: VipAccount = new VipAccount('Vip Persona', 30)
console.log(vipAccount.getName())
vipAccount.deposit(48)
vipAccount.withdraw(15)
vipAccount.getBalance()
