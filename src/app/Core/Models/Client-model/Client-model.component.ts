import {CompteModel} from '../Compte-model/Compte-model.component';
import {BeneficiaireModel} from '../beneficiaire-model/beneficiaire-model.component';
import {AgenceModel} from '../Agence-model/Agence-model.component';

export class ClientModel {
  firstname !:string;
  lastname !:string;
  email!:string;
  username!: number;
  tele!:string;
  cin!:string;
  agency:AgenceModel;
  accounts:CompteModel[];




}
