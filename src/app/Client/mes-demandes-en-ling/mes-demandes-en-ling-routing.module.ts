import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesDemandesEnLingComponent } from './mes-demandes-en-ling.component';

const routes: Routes = [{ path: '', component: MesDemandesEnLingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesDemandesEnLingRoutingModule { }
