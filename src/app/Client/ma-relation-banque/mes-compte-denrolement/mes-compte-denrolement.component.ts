import { Component, OnInit } from '@angular/core';
import {ComptsModel} from '../../../Core/Models/Compts-model/Compts-model.component';
import {TransactionModel} from '../../../Core/Models/Transaction-model/Transaction-model.component';

@Component({
  selector: 'app-mes-compte-denrolement',
  templateUrl: './mes-compte-denrolement.component.html',
  styleUrls: ['./mes-compte-denrolement.component.css']
})
export class MesCompteDenrolementComponent implements OnInit {

  public comptes:ComptsModel [];
  public transactionModel:TransactionModel[];
  public operastions:TransactionModel[];




  constructor() { }

  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }
  ngOnInit(): void {

     this.transactionModel=[
       {
         transactionType:"debit",
          amount:1222,
         dateop:"11/04/2021",
         Libell:"Versement de  brahim dlkhraa"
       },
       {
         transactionType:"credit",
         amount:142,
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

  }

}
