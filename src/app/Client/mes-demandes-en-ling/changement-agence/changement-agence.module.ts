import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangementAgenceRoutingModule } from './changement-agence-routing.module';
import { ChangementAgenceComponent } from './changement-agence.component';


@NgModule({
  declarations: [ChangementAgenceComponent],
  imports: [
    CommonModule,
    ChangementAgenceRoutingModule
  ]
})
export class ChangementAgenceModule { }
