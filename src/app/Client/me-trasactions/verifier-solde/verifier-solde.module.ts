import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerifierSoldeRoutingModule } from './verifier-solde-routing.module';
import { VerifierSoldeComponent } from './verifier-solde.component';


@NgModule({
  declarations: [VerifierSoldeComponent],
  imports: [
    CommonModule,
    VerifierSoldeRoutingModule
  ]
})
export class VerifierSoldeModule { }
