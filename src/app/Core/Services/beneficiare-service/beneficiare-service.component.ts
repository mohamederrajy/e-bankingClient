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

  SaveBeneficiare(beneficiaire:BeneficiaireModel):Observable<BeneficiaireModel>{
    const jwt =localStorage.getItem('jwt')
    console.log(jwt);
    const headers= {
      'Content-Type':  'application/json',
      Authorization: 'Bearer '+jwt,

    }
    console.log(beneficiaire)
    let host=environment.host
    return  this.http.post<BeneficiaireModel>(host+"benificier",beneficiaire,{headers})
  }
  GetBeneficiares():Observable<BeneficiaireModel[]>{
    const jwt =localStorage.getItem('jwt')
    console.log(jwt);
    const headers= {
      'Content-Type':  'application/json',
      Authorization: 'Bearer '+jwt,

    }
    let host=environment.host
    return this.http.get<BeneficiaireModel[]>(host+"benificier/me",{headers})
  }
  DeleteBeneficiares(){
    let host=environment.host
    return this.http.delete(host+"delete")
  }

}
