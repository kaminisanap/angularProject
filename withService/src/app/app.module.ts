import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { BatchesService } from './batches.service';

@NgModule({
  declarations: [
    AppComponent,
    BatchlistComponent,
    BatchdetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BatchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
