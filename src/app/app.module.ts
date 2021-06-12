import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// @ts-ignore
import {AppRoutingModule} from './app-routing.module';
// @ts-ignore
import { NZ_I18N } from 'ng-zorro-antd/i18n';
// @ts-ignore
import { en_US } from 'ng-zorro-antd/i18n';


import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NzTableModule,
    NzButtonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
