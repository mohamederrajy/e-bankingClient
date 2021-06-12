import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import {CompteModel} from '../../../Core/Models/Compte-model/Compte-model.component';
import {ClientService} from '../../../Core/Services/client-service/client-service.component';
import {CompteService} from '../../../Core/Services/compte-service/compte-service.component';
import {TransactionModel} from '../../../Core/Models/Transaction-model/Transaction-model.component';
import {TransactionService} from '../../../Core/Services/transaction-service/transaction-service.component';




@Component({
  selector: 'app-recharge-telecom, nz-demo-tabs-basic',
  templateUrl: './recharge-telecom.component.html',
  styleUrls: ['./recharge-telecom.component.css']
})
export class RechargeTelecomComponent implements OnInit {
  validateForm!: FormGroup;
  loading: boolean = false;
  errorMessage;
  public comptes:CompteModel [];
  private selectedOp;
  public transaction:TransactionModel;
  private radioSelected: string;
 private itemsList=[];
  private saved: TransactionModel;




  submitForm(data:any): void {
    this.transaction={
   amount:data.Montant,
      benificier:undefined,
      account:data.Comptes,
      description:"racharge"+this.selectedOp,
      name:"Recharge de "+data.Offer+" pour  "+data.Tel,
      type:"FACTEUR",
      transactionType:undefined,

    }
    this.onSaveTransaction(this.transaction);
    console.log(this.transaction)
    console.log(data)
    console.log(this.selectedOp)
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }




  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(private fb: FormBuilder,private compteService:CompteService, private transactionService:TransactionService) {

   }

  ngOnInit(): void {
    this.OnGetAccount()
    this.radioSelected = "item_3";
    this.itemsList=[
      {
        name:"iam"
      },
      {
        name:"inwi"
      },
      {
        name:"orange"
      },
      {
        name:"ramsa"
      },
    ]
    this.validateForm = this.fb.group({
      Comptes: [Validators.required],
      Tel: [Validators.required],
      Offer: [Validators.required],
      Montant: [Validators.required],

    })
  }


  onItemChange(value: any) {
    this.selectedOp =value.name;

  }
  OnGetAccount(){
    this.loading = true;
    this.errorMessage = "";
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
  onSaveTransaction (transaction:TransactionModel){
    this.transactionService.SaveTransaction(transaction).subscribe(data => {
      this.saved=data;
      window.location.reload();
      alert('succsess')
    })

  }
}
