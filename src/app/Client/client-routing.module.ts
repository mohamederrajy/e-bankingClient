import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';

// @ts-ignore
// @ts-ignore
// @ts-ignore
const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../Client/accueil/accueil.module').then(m => m.AccueilModule) ,
      },
      {
       path: 'Accueil',
        loadChildren: () => import('../Client/accueil/accueil.module').then(m => m.AccueilModule) ,
      },

      {
        path: 'Ma_Relation_Banque',
        loadChildren: () => import('../Client/ma-relation-banque/ma-relation-banque.module').then(m => m.MaRelationBanqueModule) ,
      },


      {
        path: 'me-trasactions',
        loadChildren: () => import('../Client/me-trasactions/me-trasactions.module').then(m => m.MeTrasactionsModule),
      },
      {
        path: 'mes-demandes-en-ling',
        loadChildren: () => import('../Client/mes-demandes-en-ling/mes-demandes-en-ling.module').then(m => m.MesDemandesEnLingModule) ,
      },

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
