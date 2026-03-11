export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true
  private valueDep: number = 0

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  setBalance = (balance: number): void => {
    this.balance += balance
    console.log(`Você adicionou ${balance} ao seu saldo`)
  }

  getBalance = (): number => {
    console.log(`Seu saldo atual é ${this.balance}`)
    return this.balance
  }

  deposit = (valueDep: number): void => {
    if(this.validateStatus()){
      this.balance += valueDep
      console.log(`Voce depositou ${valueDep}`)
    }
  }

  withdraw = (valueDep: number): void => {
      if(this.validateStatus()){
        if(this.balance > 0){
          this.balance -= valueDep
          console.log(`Voce sacou ${valueDep}`)
        } else {
          console.log('Voce não tem saldo')
        }
        
      }
  }


  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }



}
