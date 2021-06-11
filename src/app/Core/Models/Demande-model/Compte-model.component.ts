import {TransactionModel} from '../Transaction-model/Transaction-model.component';
import {CompteModel} from '../Compte-model/Compte-model.component';
import {AgenceModel} from '../Agence-model/Agence-model.component';

export class DemandeModel {
  ville!:string;
  type!: string ;
  motif:string;
  account:CompteModel;
  agnceToTransfer:AgenceModel;
}
