import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { STRINTRComponent } from './strintr/strintr.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    STRINTRComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
