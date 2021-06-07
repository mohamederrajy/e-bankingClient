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
      {
        path: 'transfert-de-fonds',
        loadChildren: () => import('./transfert-de-fonds/transfert-de-fonds.module').then(m => m.TransfertDeFondsModule)
      },
      {
        path: 'verifier-solde',
        loadChildren: () => import('./verifier-solde/verifier-solde.module').then(m => m.VerifierSoldeModule)      },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeTrasactionsRoutingModule { }
