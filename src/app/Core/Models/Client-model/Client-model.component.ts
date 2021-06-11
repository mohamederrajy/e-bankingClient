import {CompteModel} from '../Compte-model/Compte-model.component';
import {BeneficiaireModel} from '../beneficiaire-model/beneficiaire-model.component';
import {AgenceModel} from '../Agence-model/Agence-model.component';

export class ClientModel {
  nom !:string;
  pernom !:string;
  email!:string;
  phone!: number;
  address!:string;
  sex!:string;
  Comptes: CompteModel[];
  Beneficiaires:BeneficiaireModel[];
  agence:AgenceModel



}
