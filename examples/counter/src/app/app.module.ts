import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {
  BlockDirective,
  ButtonDirective,
  HeadingDirective,
  TextDirective,
} from './directives';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    BlockDirective,
    ButtonDirective,
    HeadingDirective,
    TextDirective,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
