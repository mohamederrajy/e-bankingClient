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
    let host=environment.host
    return this.http.get<CompteModel[]>(host+"comptes")
  }


}
