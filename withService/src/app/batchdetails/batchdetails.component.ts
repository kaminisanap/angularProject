import { Component, OnInit } from '@angular/core';
import { BatchesService } from '../batches.service';

@Component({
  selector: 'app-batchdetails',
  templateUrl: './batchdetails.component.html',
  styleUrls: ['./batchdetails.component.css']
})

export class BatchdetailsComponent implements OnInit {
  public Batches : any = [];

  constructor(public mobj : BatchesService)
  {}

  ngOnInit()
  {
    this.Batches = this.mobj.getBatchDetails();
  }
}
