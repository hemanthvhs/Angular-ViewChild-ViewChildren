import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppSecondary } from '../secondary/secondary.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,AppSecondary ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
