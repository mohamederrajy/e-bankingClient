import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeTrasactionsRoutingModule } from './me-trasactions-routing.module';
import { MeTrasactionsComponent } from './me-trasactions.component';


@NgModule({
  declarations: [MeTrasactionsComponent],
  imports: [
    CommonModule,
    MeTrasactionsRoutingModule
  ]
})
export class MeTrasactionsModule { }
