import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { ChangementAgenceRoutingModule } from './changement-agence-routing.module';
import { ChangementAgenceComponent } from './changement-agence.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzSpinModule} from 'ng-zorro-antd/spin';


@NgModule({
  declarations: [ChangementAgenceComponent],
  imports: [
    NzSwitchModule,
    CommonModule,
    ChangementAgenceRoutingModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzTableModule,
    NzSpinModule,
    FormsModule
  ]
})
export class ChangementAgenceModule { }
