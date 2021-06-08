import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactezNousComponent } from './contactez-nous.component';

const routes: Routes = [{ path: '', component: ContactezNousComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactezNousRoutingModule { }
