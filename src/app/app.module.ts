import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {mainRouting} from './app.routing';
import {LoginComponent} from './module/login/component/login';
import {WorkComponent} from './module/work/component/work';
import {AppComponent} from './app.component';

import {DialogModule} from 'primeng/primeng';

declare var module: any

@NgModule({
  imports: [
    BrowserModule,
    mainRouting,
    HttpModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  declarations: [
    LoginComponent,
    WorkComponent,
    AppComponent
  ],
  bootstrap: [
  	AppComponent
  ]
})

export class AppModule { }