import {Component, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {ClientModel} from '../../../Core/Models/Client-model/Client-model.component';
import {CompteModel} from '../../../Core/Models/Compte-model/Compte-model.component';
import {TransactionModel} from '../../../Core/Models/Transaction-model/Transaction-model.component';
import {BeneficiaireModel} from '../../../Core/Models/beneficiaire-model/beneficiaire-model.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzModalRef, NzModalService} from 'ng-zorro-antd/modal';
import {AgenceModel} from '../../../Core/Models/Agence-model/Agence-model.component';
import {BeneficiareService} from '../../../Core/Services/beneficiare-service/beneficiare-service.component';
import {TransactionService} from '../../../Core/Services/transaction-service/transaction-service.component';
import {Observable, of} from 'rxjs';
import {AppDataState,DataStateEnum} from '../../../../state/client.state';
import {catchError, map, startWith} from 'rxjs/operators';
import {CompteService} from '../../../Core/Services/compte-service/compte-service.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-effectuer-des-virements',
  templateUrl: './effectuer-des-virements.component.html',
  styleUrls: ['./effectuer-des-virements.component.css']
})
export class EffectuerDesVirementsComponent implements OnInit {
  beneficiair$: Observable<AppDataState<BeneficiaireModel[]>> | null=null;
  DataStateEnum=DataStateEnum
  validateForm!: FormGroup;
  saved:any;
  validateFormben!: FormGroup;
  public clinet:ClientModel;
  public comptes:CompteModel [];
  public transaction:TransactionModel;
  public transactionModel:TransactionModel[];
  public beneficiaires:BeneficiaireModel[];
  public beneficiaire:BeneficiaireModel;
  public agence:AgenceModel;
  loading: boolean = false;
  errorMessage;
  constructor(private router: Router,private compteService:CompteService , private transactionService:TransactionService, private formBuilder: FormBuilder,private modal: NzModalService, private viewContainerRef: ViewContainerRef,private beneficiareService:BeneficiareService) { }

  tplModalButtonLoading = false;
  disabled = false;


  ngOnInit(): void {
    this. OnGetAccount();
    this. OnGetBeneficiair1()
    this.OnGetBeneficiair();
    this.validateForm = this.formBuilder.group({
      Comptes: [null, [Validators.required]],
      Beneficiaire: [null, [Validators.required]],
      montant: [null, [Validators.required]],
      motif: [null, [Validators.required]],


    });
    this.validateFormben = this.formBuilder.group({
      tele: [null, [Validators.required]],
      accountNum: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      firstname: [null, [Validators.required]],


    });


  }

  submitForm(value: any) {
  if(value.Comptes!=null && value.Beneficiaire!=null && value.montant && value.motif!=null){
    this.transaction={
      benificier:value.Beneficiaire,
      description:value.motif,
      amount:value.montant,
      type:"VIREMENT",
      transactionType:"debit",
      account:value.Comptes,
      name:"VIREMENT de montant "+value.montant+"  "+"vers"+value.Beneficiaire.firstname,

    }
    this.onSaveTransaction(this.transaction);
    console.log( this.transaction)

  }
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

  }

  createTplModal(tplTitle: TemplateRef<{}>, tplContent: TemplateRef<{}>, tplFooter: TemplateRef<{}>): void {
    this.modal.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzWidth:500,

      nzClosable: false,
      nzComponentParams: {
        value: 'Template Context'
      },
      nzOnOk: () => console.log('Click ok')
    });


  }
  destroyTplModal(modelRef: NzModalRef): void {
    this.tplModalButtonLoading = true;
    setTimeout(() => {
      this.tplModalButtonLoading = false;
      modelRef.destroy();
    }, 1000);
  }


  addnewB(data: any) {
    if(data.accountNum!=null && data.firstname!=null && data.lastName!=null && data.tele!=null && data.email !=null ){
      this.beneficiaire={
        id:undefined,
        accountNum:data.accountNum,
        tele:data.tele,
        email:data.email,
        lastName:data.lastName,
        firstname:data.firstname
      }
   this.onSeveBenificier(this.beneficiaire);
    }


  }
  OnGetBeneficiair(){
     this.beneficiair$=  this.beneficiareService.GetBeneficiares().pipe(
      map(data=>{
        return ({dataState:DataStateEnum.LOADED,data:data})}),
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.Error,errorMessage:err.message}))
    )
  }
  OnGetBeneficiair1(){
  this.loading = true;
  this.errorMessage = "";
  this.beneficiareService.GetBeneficiares()
.subscribe(
(response) => {                           //next() callback
  console.log('response received')
  this.beneficiaires = response;
},
(error) => {                              //error() callback
  console.error('Request failed with error')
  this.errorMessage = error;
  this.loading = false;
},
  () => {                                   //complete() callback
    console.error('Request completed')      //This is actually not needed
    this.loading = false;
  })
}


  OnGetAccount(){
    this.compteService.GetComptes()
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.comptes = response;
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed
          this.loading = false;
        })
  }
  onSeveBenificier(beneficiaire:BeneficiaireModel){
    this.beneficiareService.SaveBeneficiare(this.beneficiaire).subscribe(data => {
      this.saved=data;
      this.validateFormben.reset();
      window.location.reload();
      alert('succsess')
    })
  }

 onDeleteBenificier(benf: BeneficiaireModel) {

    this.beneficiareService.DeleteBeneficiares(benf.id).subscribe(data => {
      this.saved=data;
      alert('deleted')
      window.location.reload();

    })
 }
 onSaveTransaction (transaction:TransactionModel){
   this.transactionService.SaveTransaction(transaction).subscribe(data => {
     this.saved=data;
     this.validateFormben.reset();
     window.location.reload();
     alert('succsess')
   })

 }
}
