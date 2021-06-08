import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactezNousRoutingModule } from './contactez-nous-routing.module';
import { ContactezNousComponent } from './contactez-nous.component';


@NgModule({
  declarations: [ContactezNousComponent],
  imports: [
    CommonModule,
    ContactezNousRoutingModule
  ]
})
export class ContactezNousModule { }
