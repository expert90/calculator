import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {mainRouting} from './app.routing';
import {LoginComponent} from './module/login/component/login';
import {WorkComponent} from './module/work/component/work';
import {AppComponent} from './app.component';

import {DialogModule, ChartModule, GrowlModule} from 'primeng/primeng';



@NgModule({
  imports: [
    BrowserModule,
    mainRouting,
    HttpModule,
    FormsModule,
    DialogModule,
    ChartModule,
    GrowlModule,
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