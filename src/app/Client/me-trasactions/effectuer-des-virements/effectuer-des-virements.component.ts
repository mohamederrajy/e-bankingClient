import {Component, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {ClientModel} from '../../../Core/Models/Client-model/Client-model.component';
import {ComptsModel} from '../../../Core/Models/Compts-model/Compts-model.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {TransactionModel} from '../../../Core/Models/Transaction-model/Transaction-model.component';
import {BeneficiaireModel} from '../../../Core/Models/beneficiaire-model/beneficiaire-model.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzModalRef, NzModalService} from 'ng-zorro-antd/modal';
import {AgenceModel} from '../../../Core/Models/Agence-model/Agence-model.component';

@Component({
  selector: 'app-effectuer-des-virements',
  templateUrl: './effectuer-des-virements.component.html',
  styleUrls: ['./effectuer-des-virements.component.css']
})
export class EffectuerDesVirementsComponent implements OnInit {
  validateForm!: FormGroup;
  validateFormben!: FormGroup;
  public clinet:ClientModel;
  public comptes:ComptsModel [];
  public transactionModel:TransactionModel[];
  public beneficiaires:BeneficiaireModel[];
  public beneficiaire:BeneficiaireModel;
  public agence:AgenceModel;
  constructor(private formBuilder: FormBuilder,private modal: NzModalService, private viewContainerRef: ViewContainerRef) { }

  tplModalButtonLoading = false;
  disabled = false;


  ngOnInit(): void {
    this.agence={
      ville:"agadir"

    }
 // @ts-ignore
    // @ts-ignore
    this.beneficiaires=[
   {
     accountNum:2451524,
     firstname:"mohamed",
     lastName:"raij",
     tele:45636362,
     email:"mohedm@gmail.com"


   },

 ]


    this.transactionModel=[
      {
        transactionType:"debit ",
        amount:1222,
        dateop:"11/04/2021",
        Libell:"Versement de  mohamed errajy"
      },
      {
        transactionType:"credit ",
        amount:1222,
        dateop:"11/04/2021",
        Libell:"Retrait  de  mohamed errajy"

      }
    ]

    this.comptes =[
      {
        id:1,
        num_compte :34445678,
        devis:"MAD",
        intitule:"MOHAMED RAJY",
        solde:10000,
        operations:this.transactionModel



      },
      {
        id:2,
        num_compte :4255436,
        devis:"MAD",
        intitule:"MOHAMED RAJY",
        solde:20000,
        operations:this.transactionModel




      },
    ]
    this.clinet={
      nom:"rajy",
      pernom:"mohamed",
      address:" agadir",
      email:"mohamed@gmail.com",
      sex:"M",
      phone:38998989443,
      Comptes :this.comptes,
      Beneficiaires:this.beneficiaires,
      agence: this.agence

    }
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
    console.log(value);

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
    console.log(data)
    if(data.accountNum!=null && data.firstname!=null && data.lastName!=null && data.tele!=null && data.email !=null ){
      this.beneficiaire={
    accountNum:data.accountNum,
        tele:data.tele,
        email:data.email,
        lastName:data.lastName,
        firstname:data.firstname
      }
      this.clinet.Beneficiaires.push(this.beneficiaire);

    }


  }
}
