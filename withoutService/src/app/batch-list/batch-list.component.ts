import { Component } from '@angular/core';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent 
{
  public Batches  = [
    {"Name":"PPA", "Fees":"1000", "Duration":"3.5 Months"},
    {"Name":"LB", "Fees":"3000", "Duration":"3.5 Months"},
    {"Name":"Angular", "Fees":"1000", "Duration":"3.5 Months"}
  ];
}
