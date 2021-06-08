import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EffectuerDesVirementsComponent } from './effectuer-des-virements.component';

const routes: Routes = [{ path: '', component: EffectuerDesVirementsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EffectuerDesVirementsRoutingModule { }
