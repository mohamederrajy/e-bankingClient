import { Component, OnInit } from '@angular/core';
import {CompteModel} from '../../../Core/Models/Compte-model/Compte-model.component';
import {TransactionModel} from '../../../Core/Models/Transaction-model/Transaction-model.component';
import {BeneficiaireModel} from '../../../Core/Models/beneficiaire-model/beneficiaire-model.component';
import {AgenceModel} from '../../../Core/Models/Agence-model/Agence-model.component';
import {ClientModel} from '../../../Core/Models/Client-model/Client-model.component';
import {CompteService} from '../../../Core/Services/compte-service/compte-service.component';
import {Observable, of} from 'rxjs';
// @ts-ignore
import {DashboradModel} from '../../../Core/Models/dashboard-model/dashboard-model.component';
import {catchError, map, startWith} from 'rxjs/operators';
import {AppDataState,DataStateEnum} from '../../../../state/client.state';

@Component({
  selector: 'app-mes-compte-denrolement',
  templateUrl: './mes-compte-denrolement.component.html',
  styleUrls: ['./mes-compte-denrolement.component.css']
})
export class MesCompteDenrolementComponent implements OnInit {
  comptes$: Observable<AppDataState<CompteModel[]>> | null=null;
  DataStateEnum=DataStateEnum
  public comptes: CompteModel [];
  public transactionModel: TransactionModel[];
  public transaction: TransactionModel;
  public beneficiaires: BeneficiaireModel[];
  public agence: AgenceModel;


  constructor(private compteService:CompteService) {
  }

  expandSet = new Set<number>();

  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }

  ngOnInit(): void {

    this.OnGetcpmtes();
  }
  OnGetcpmtes(){
    this.comptes$=this.compteService.GetComptes().pipe(
      map(data=>{
        return ({dataState:DataStateEnum.LOADED,data:data})}),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.Error,errorMessage:err.message}))
    )
  }
}
