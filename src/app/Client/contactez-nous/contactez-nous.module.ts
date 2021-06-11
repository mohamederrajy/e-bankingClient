import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactezNousRoutingModule } from './contactez-nous-routing.module';
import { ContactezNousComponent } from './contactez-nous.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';



@NgModule({
  declarations: [ContactezNousComponent],
  imports: [
    CommonModule,
    ContactezNousRoutingModule,
    ReactiveFormsModule,
    NzTabsModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    FormsModule
  ]
})
export class ContactezNousModule { }
