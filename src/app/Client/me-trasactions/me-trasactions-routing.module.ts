import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeTrasactionsComponent } from './me-trasactions.component';

// @ts-ignore
const routes: Routes = [
  {
    path: '',
    component: MeTrasactionsComponent,
    children: [
      {
        path: 'effectuer-des-virements',
        loadChildren: () => import('./effectuer-des-virements/effectuer-des-virements.module').then(m => m.EffectuerDesVirementsModule)
      },
      {
        path: 'recharge-telecom',
        loadChildren: () => import('./recharge-telecom/recharge-telecom.module').then(m => m.RechargeTelecomModule)
      },


    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeTrasactionsRoutingModule { }
