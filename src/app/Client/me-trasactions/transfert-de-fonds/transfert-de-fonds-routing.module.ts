import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransfertDeFondsComponent } from './transfert-de-fonds.component';

const routes: Routes = [{ path: '', component: TransfertDeFondsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransfertDeFondsRoutingModule { }
