import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DashboradModel} from '../../Models/dashboard-model/dashboard-model.component';
import {environment} from '../../../../environments/environment';
import {TransactionModel} from '../../Models/Transaction-model/Transaction-model.component';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  constructor(private http:HttpClient) { }

  SaveTransaction(transaction:TransactionModel):Observable<TransactionModel>{
    const jwt =localStorage.getItem('jwt')
    console.log(jwt);
    const headers= {
      'Content-Type':  'application/json',
      Authorization: 'Bearer '+jwt,

    }
    let host=environment.host
    return  this.http.post<TransactionModel>(host+"transaction",transaction,{headers})
  }

}
