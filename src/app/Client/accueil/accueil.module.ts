import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccueilRoutingModule } from './accueil-routing.module';
import { AccueilComponent } from './accueil.component';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {FormsModule} from '@angular/forms';
import {NzTableModule} from 'ng-zorro-antd/table';


@NgModule({
  declarations: [AccueilComponent],
    imports: [
        CommonModule,
        AccueilRoutingModule,
        NzFormModule,
        NzSelectModule,
        FormsModule,
        NzTableModule,

    ]
})
export class AccueilModule { }
