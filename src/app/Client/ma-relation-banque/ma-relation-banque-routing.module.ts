import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaRelationBanqueComponent } from './ma-relation-banque.component';

const routes: Routes = [
  {
    path: '',
    component: MaRelationBanqueComponent,
    children: [
      {
        path: 'Mes_Compte_denrolement',
        loadChildren: () => import('./mes-compte-denrolement/mes-compte-denrolement.module').then(m => m.MesCompteDenrolementModule) ,

  },

    ]
  }

  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaRelationBanqueRoutingModule { }
