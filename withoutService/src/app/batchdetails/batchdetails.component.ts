import { Component } from '@angular/core';

@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrls: ['./batchdetails.component.css']
})
export class BatchdetailsComponent {
  public Batches  = [
      {"Name":"PPA", "Fees":"1000", "Duration":"3.5 Months"},
      {"Name":"LB", "Fees":"3000", "Duration":"3.5 Months"},
      {"Name":"Angular", "Fees":"1000", "Duration":"3.5 Months"}
    ];
}
