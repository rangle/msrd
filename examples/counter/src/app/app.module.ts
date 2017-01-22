import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MsrdDirective } from '../../../../src';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    MsrdDirective
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
