import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [ProfilComponent],
    imports: [
        CommonModule,
        ProfilRoutingModule,
        FormsModule
    ]
})
export class ProfilModule { }
