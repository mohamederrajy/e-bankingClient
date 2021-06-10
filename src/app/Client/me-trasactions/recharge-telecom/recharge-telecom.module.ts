import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechargeTelecomRoutingModule } from './recharge-telecom-routing.module';
import { RechargeTelecomComponent } from './recharge-telecom.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [RechargeTelecomComponent],
    imports: [
        CommonModule,
        RechargeTelecomRoutingModule,
        ReactiveFormsModule
    ]
})
export class RechargeTelecomModule { }
