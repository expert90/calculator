import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {PdfComponent} from './module/pdf/pdf';

import {ChartModule} from 'primeng/primeng';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    ChartModule,
    BrowserAnimationsModule
  ],
  declarations: [
    PdfComponent
  ],
  bootstrap: [
  	PdfComponent
  ]
})

export class PdfModule { }