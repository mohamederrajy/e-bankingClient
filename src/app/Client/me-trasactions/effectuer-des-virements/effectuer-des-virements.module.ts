import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { EffectuerDesVirementsRoutingModule } from './effectuer-des-virements-routing.module';
import { EffectuerDesVirementsComponent } from './effectuer-des-virements.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {ReactiveFormsModule} from '@angular/forms';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {MatIconModule} from '@angular/material/icon';
import {NzSpinModule} from 'ng-zorro-antd/spin';


@NgModule({
  declarations: [EffectuerDesVirementsComponent],
    imports: [
        NzInputModule,
        NzModalModule,
        CommonModule,
        EffectuerDesVirementsRoutingModule,
        NzFormModule,
        NzSelectModule,
        ReactiveFormsModule,
        NzButtonModule,
        NzTableModule,
        NzIconModule,
        MatIconModule,
        NzSpinModule
    ]
})
export class EffectuerDesVirementsModule { }
