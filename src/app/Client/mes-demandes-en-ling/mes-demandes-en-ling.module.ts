import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesDemandesEnLingRoutingModule } from './mes-demandes-en-ling-routing.module';
import { MesDemandesEnLingComponent } from './mes-demandes-en-ling.component';


@NgModule({
  declarations: [MesDemandesEnLingComponent],
  imports: [
    CommonModule,
    MesDemandesEnLingRoutingModule
  ]
})
export class MesDemandesEnLingModule { }
