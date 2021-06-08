import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RechargeTelecomRoutingModule } from './recharge-telecom-routing.module';
import { RechargeTelecomComponent } from './recharge-telecom.component';


@NgModule({
  declarations: [RechargeTelecomComponent],
  imports: [
    CommonModule,
    RechargeTelecomRoutingModule
  ]
})
export class RechargeTelecomModule { }
