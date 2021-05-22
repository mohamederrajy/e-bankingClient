import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaRelationBanqueComponent } from './ma-relation-banque.component';

const routes: Routes = [{ path: '', component: MaRelationBanqueComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaRelationBanqueRoutingModule { }
