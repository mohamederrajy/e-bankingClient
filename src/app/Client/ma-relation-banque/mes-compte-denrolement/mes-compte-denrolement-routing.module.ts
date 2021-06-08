import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesCompteDenrolementComponent } from './mes-compte-denrolement.component';

const routes: Routes = [{ path: '', component: MesCompteDenrolementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesCompteDenrolementRoutingModule { }
