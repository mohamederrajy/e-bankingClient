import {TransactionModel} from '../Transaction-model/Transaction-model.component';

export class ComptsModel {
  id:number;
  num_compte !:number;
  solde !:number;
  intitule!:string;
  devis!: string ;
  operations:TransactionModel[];
}
