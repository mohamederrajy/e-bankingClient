import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesCompteDenrolementRoutingModule } from './mes-compte-denrolement-routing.module';
import { MesCompteDenrolementComponent } from './mes-compte-denrolement.component';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzIconModule} from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [MesCompteDenrolementComponent],
    imports: [
        CommonModule,
        MesCompteDenrolementRoutingModule,
        NzTableModule,
        NzIconModule
    ]
})
export class MesCompteDenrolementModule { }
