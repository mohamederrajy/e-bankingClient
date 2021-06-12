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
    const jwt =localStorage.getItem('jwt')
    console.log(jwt);
    const headers= {
      'Content-Type':  'application/json',
      Authorization: 'Bearer '+jwt,

    }
    let host=environment.host
    return this.http.get<DemandeModel[]>(host+"demande",{headers})
  }
  SaveDemande(demande:DemandeModel):Observable<DemandeModel>{
    const jwt =localStorage.getItem('jwt')
    console.log(jwt);
    const headers= {
      'Content-Type':  'application/json',
      Authorization: 'Bearer '+jwt,

    }
    let host=environment.host
    return  this.http.post<DemandeModel>(host+"demande",demande,{headers})
  }
  CancelDemande(object:any,id:number){
    const jwt =localStorage.getItem('jwt')
    console.log(jwt);
    const headers= {
      'Content-Type':  'application/json',
      Authorization: 'Bearer '+jwt,

    }
    let host=environment.host
    return this.http.put(host+"demande/"+id,object,{headers})
  }

}
