import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../Core/Services/client-service/client-service.component';
import {ClientModel} from '../../Core/Models/Client-model/Client-model.component';
import {Observable, of} from 'rxjs';
import {AppDataState,DataStateEnum} from '../../../state/client.state';
import {CompteModel} from '../../Core/Models/Compte-model/Compte-model.component';
import {catchError, map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-transdert-de-fonds',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  client$: Observable<AppDataState<ClientModel>> | null=null;
  DataStateEnum=DataStateEnum

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.OngetClient();
  }

  OngetClient(){
    this.client$=this.clientService.GetClient().pipe(
      map(data=>{
        return ({dataState:DataStateEnum.LOADED,data:data})}),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.Error,errorMessage:err.message}))
    )

  }

}
