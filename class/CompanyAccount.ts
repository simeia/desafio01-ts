import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  private valueEmprestimo: number = 0

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valueEmprestimo: number): void => {
   if(this.validateStatus()){
      this.setBalance(this.getBalance() + valueEmprestimo)
      console.log(`Voce pegou um empréstimo de ${valueEmprestimo}`)
   } else {
      console.log(`Sua conta esta inativa, por isso você não pode fazer empréstimos`)
   }
    
  }
}
