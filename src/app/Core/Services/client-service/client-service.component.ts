import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {ClientModel} from '../../Models/Client-model/Client-model.component';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }



  GetClient():Observable<ClientModel>{
    let host=environment.host
    const headers= {
      'Content-Type':  'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzYW1hdGlAZ21haWwuY29tIiwiaWF0IjoxNjIzNDA4MDEwLCJleHAiOjE2MjM0OTQ0MTB9.ExwD3UU7GS82rXVZq9abnb8Xi5cbXpEvVSt2lawR90x0X6q3vbetQbNz3CzQt-622Az3U7dT1zP-eqfJaAjZQA',

    }
    return this.http.get<ClientModel>(host+"client/me",{headers})
  }
}
