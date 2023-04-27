import { Component, OnInit } from '@angular/core';
import { BatchesService } from '../batches.service';

@Component({
  selector: 'app-batchlist',
  templateUrl: './batchlist.component.html',
  styleUrls: ['./batchlist.component.css']
})
export class BatchlistComponent implements OnInit {
  public Batches : any = [];

  constructor(public mobj : BatchesService)
  {}

  ngOnInit()
  {
    this.Batches = this.mobj.getBatchDetails();
  }
}
