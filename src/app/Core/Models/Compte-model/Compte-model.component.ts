import {TransactionModel} from '../Transaction-model/Transaction-model.component';

export class CompteModel {
  id:number;
  accountNum !:number;
  balance !:number;
  name!:string;
  currency!: string ;
  transactions:TransactionModel[];
}
