import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaRelationBanqueRoutingModule } from './ma-relation-banque-routing.module';
import { MaRelationBanqueComponent } from './ma-relation-banque.component';


@NgModule({
  declarations: [MaRelationBanqueComponent],
  imports: [
    CommonModule,
    MaRelationBanqueRoutingModule
  ]
})
export class MaRelationBanqueModule { }
