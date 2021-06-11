import {TransactionModel} from '../Transaction-model/Transaction-model.component';

export class CompteModel {
  id:number;
  num_compte !:number;
  solde !:number;
  intitule!:string;
  devis!: string ;
  transactions:TransactionModel[];
}
