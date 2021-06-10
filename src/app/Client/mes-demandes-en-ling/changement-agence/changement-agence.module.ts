import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangementAgenceRoutingModule } from './changement-agence-routing.module';
import { ChangementAgenceComponent } from './changement-agence.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzInputModule} from 'ng-zorro-antd/input';
import {ReactiveFormsModule} from '@angular/forms';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzTableModule} from 'ng-zorro-antd/table';


@NgModule({
  declarations: [ChangementAgenceComponent],
    imports: [
        CommonModule,
        ChangementAgenceRoutingModule,
        NzFormModule,
        NzInputModule,
        ReactiveFormsModule,
        NzSelectModule,
        NzTableModule
    ]
})
export class ChangementAgenceModule { }
