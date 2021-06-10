import {ComptsModel} from '../Compts-model/Compts-model.component';
import {BeneficiaireModel} from '../beneficiaire-model/beneficiaire-model.component';
import {AgenceModel} from '../Agence-model/Agence-model.component';

export class ClientModel {
  nom !:string;
  pernom !:string;
  email!:string;
  phone!: number;
  address!:string;
  sex!:string;
  Comptes: ComptsModel[];
  Beneficiaires:BeneficiaireModel[];
  agence:AgenceModel



}
