import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DashboradModel} from '../../Models/dashboard-model/dashboard-model.component';
import {environment} from '../../../../environments/environment';
import {TransactionModel} from '../../Models/Transaction-model/Transaction-model.component';
import {DemandeModel} from '../../Models/Demande-model/Compte-model.component';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http:HttpClient) { }

  GetDemande():Observable<DemandeModel[]>{
    let host=environment.host
    return this.http.get<DemandeModel[]>(host+"Demande")
  }
  SaveDemande(demande:DemandeModel):Observable<DemandeModel>{
    let host=environment.host
    return  this.http.post<DemandeModel>(host+"Demande",demande)
  }
  cancelDemande(){
    let host=environment.host
    return  this.http.delete(host+"delete",)
  }

}
