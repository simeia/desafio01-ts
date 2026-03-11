import { DioAccount } from "./DioAccount"

export class VipAccount extends DioAccount {

    deposit = (valueDep: number):void => {
        if(this.validateStatus()){
            this.setBalance(this.getBalance() + valueDep + 10)
            console.log(`Voce depositou ${valueDep} e recebeu + 10 de prêmio`)
        }
    }

}