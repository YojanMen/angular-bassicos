import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador/contador.module';
import { heoresmodule } from './heores/heroes.module';



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    heoresmodule,
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
