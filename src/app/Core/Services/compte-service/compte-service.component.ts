import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DashboradModel} from '../../Models/dashboard-model/dashboard-model.component';
import {environment} from '../../../../environments/environment';
import {CompteModel} from '../../Models/Compte-model/Compte-model.component';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http:HttpClient) { }

  GetComptes():Observable<CompteModel[]>{
    const headers= {
      'Content-Type':  'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW1hdGlAZ21haWwuY29tIiwiaWF0IjoxNjIzNDA4MDEwLCJleHAiOjE2MjM0OTQ0MTB9.ExwD3UU7GS82rXVZq9abnb8Xi5cbXpEvVSt2lawR90x0X6q3vbetQbNz3CzQt-622Az3U7dT1zP-eqfJaAjZQA',

    }
    let host=environment.host
    return this.http.get<CompteModel[]>(host+"account/me",{headers})
  }


}
