import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzInputModule } from 'ng-zorro-antd/input';


import { RechargeTelecomRoutingModule } from './recharge-telecom-routing.module';
import { RechargeTelecomComponent } from './recharge-telecom.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NzFormModule} from 'ng-zorro-antd/form';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NzSelectModule} from 'ng-zorro-antd/select';



@NgModule({
  declarations: [RechargeTelecomComponent],
  imports: [
    CommonModule,
    RechargeTelecomRoutingModule,
    NzTabsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzSelectModule,
    NzInputModule
  ]
})
export class RechargeTelecomModule { }
