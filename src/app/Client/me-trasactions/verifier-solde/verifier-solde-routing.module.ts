import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifierSoldeComponent } from './verifier-solde.component';

const routes: Routes = [{ path: '', component: VerifierSoldeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerifierSoldeRoutingModule { }
