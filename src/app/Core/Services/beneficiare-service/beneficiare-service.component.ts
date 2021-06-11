import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {BeneficiaireModel} from '../../Models/beneficiaire-model/beneficiaire-model.component';
import {CompteModel} from '../../Models/Compte-model/Compte-model.component';

@Injectable({
  providedIn: 'root'
})
export class BeneficiareService {
  constructor(private http:HttpClient) { }

  SaveBeneficiare(beneficiaire:BeneficiaireModel, id:any):Observable<BeneficiaireModel>{
    let host=environment.host
    return  this.http.post<BeneficiaireModel>(host+"beneficiaire/"+{id},beneficiaire)
  }
  GetBeneficiares():Observable<BeneficiaireModel[]>{
    let host=environment.host
    return this.http.get<BeneficiaireModel[]>(host+"benficeires")
  }
  DeleteBeneficiares():Observable<BeneficiaireModel[]>{
    let host=environment.host
    return this.http.delete<BeneficiaireModel[]>(host+"delete")
  }

}
