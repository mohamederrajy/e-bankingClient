import {CompteModel} from '../Compte-model/Compte-model.component';
import {BeneficiaireModel} from '../beneficiaire-model/beneficiaire-model.component';
export class TransactionModel {
  amount!:number;
  transactionType!:string;
  Libell!:string;
  description:string;
  cretaedAt:string;
  benificier:BeneficiaireModel;


}
