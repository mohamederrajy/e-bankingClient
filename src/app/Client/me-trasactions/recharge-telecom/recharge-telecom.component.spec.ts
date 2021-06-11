/*import {Component, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {ClientModel} from '../../../Core/Models/Client-model/Client-model.component';
import {ComptsModel} from '../../../Core/Models/Compts-model/Compts-model.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import {TransactionModel} from '../../../Core/Models/Transaction-model/Transaction-model.component';
import {BeneficiaireModel} from '../../../Core/Models/beneficiaire-model/beneficiaire-model.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NzModalRef, NzModalService} from 'ng-zorro-antd/modal';

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
  constructor(private formBuilder: FormBuilder,private modal: NzModalService, private viewContainerRef: ViewContainerRef) { }

  tplModalButtonLoading = false;
  disabled = false;


  ngOnInit(): void {
    this.beneficiaires=[
      {
        numercompte:334567890,
        Libelle:"brahimp affsy"

      },

    ]


    this.transactionModel=[
      {
        credit:null,
        debit:1220 ,
        dateop:"11/04/2021",
        Libell:"Versement de  mohamed errajy"
      },
      {
        credit:1200,
        debit:null ,
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
      Beneficiaires:this.beneficiaires

    }
    this.validateForm = this.formBuilder.group({
      Comptes: [null, [Validators.required]],
      Beneficiaire: [null, [Validators.required]],
      montant: [null, [Validators.required]],
      motif: [null, [Validators.required]],


    });
    this.validateFormben = this.formBuilder.group({
      Libelle: [null, [Validators.required]],
      numercompte: [null, [Validators.required]],

    });


  }

  submitForm(value: any) {

    console.log(value);

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
    if(data.numercompte!=null && data.Libelle!=null){
      this.beneficiaire={
        Libelle:data.Libelle,
        numercompte:data.numercompte
      }
      this.clinet.Beneficiaires.push(this.beneficiaire);

    }


  }
}*/
