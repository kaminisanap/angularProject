import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { BatchdetailsComponent } from './batchdetails/batchdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    BatchListComponent,
    BatchdetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
