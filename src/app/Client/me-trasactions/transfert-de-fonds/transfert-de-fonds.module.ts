import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransfertDeFondsRoutingModule } from './transfert-de-fonds-routing.module';
import { TransfertDeFondsComponent } from './transfert-de-fonds.component';


@NgModule({
  declarations: [TransfertDeFondsComponent],
  imports: [
    CommonModule,
    TransfertDeFondsRoutingModule
  ]
})
export class TransfertDeFondsModule { }
