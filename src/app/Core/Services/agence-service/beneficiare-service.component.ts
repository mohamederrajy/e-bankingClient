import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {BeneficiaireModel} from '../../Models/beneficiaire-model/beneficiaire-model.component';
import {CompteModel} from '../../Models/Compte-model/Compte-model.component';
import {AgenceModel} from '../../Models/Agence-model/Agence-model.component';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {
  constructor(private http:HttpClient) { }



  GetAllAgences():Observable<AgenceModel[]>{
    const jwt =localStorage.getItem('jwt')
    console.log(jwt);
    const headers= {
      'Content-Type':  'application/json',
      Authorization: 'Bearer '+jwt,

    }
    let host=environment.host
    return this.http.get<AgenceModel[]>(host+"agency",{headers})
  }
  GetClientAgence():Observable<AgenceModel>{
    let host=environment.host
    return this.http.get<AgenceModel>(host+"getallagence")
  }


}
