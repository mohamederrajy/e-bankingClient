import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeTrasactionsComponent } from './me-trasactions.component';

const routes: Routes = [{ path: '', component: MeTrasactionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeTrasactionsRoutingModule { }
