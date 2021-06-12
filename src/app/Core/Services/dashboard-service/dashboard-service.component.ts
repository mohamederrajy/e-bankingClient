import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DashboradModel} from '../../Models/dashboard-model/dashboard-model.component';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }



  GetDashboard():Observable<DashboradModel>{
    let host=environment.host
    const jwt =localStorage.getItem('jwt')
    console.log(jwt);
    const headers= {
      'Content-Type':  'application/json',
      Authorization: 'Bearer '+jwt,

    }
    return this.http.get<DashboradModel>(host+"client/dashboard",{headers})
  }

}
