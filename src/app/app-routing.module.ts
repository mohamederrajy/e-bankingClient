
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./Client/client.module').then(m => m.ClientModule) },
  { path: 'Client', loadChildren: () => import('./Client/client.module').then(m => m.ClientModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
