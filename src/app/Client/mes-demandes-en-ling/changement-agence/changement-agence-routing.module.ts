import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChangementAgenceComponent } from './changement-agence.component';

const routes: Routes = [{ path: '', component: ChangementAgenceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangementAgenceRoutingModule { }
