import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchesService {
   public getBatchDetails()
   {
    return [
      {"Name":"PPA", "Fees":100000, "Duration":"3.5"},
      {"Name":"LB", "Fees":30000, "Duration":"3.4"},
      {"Name":"Angular", "Fees":288888, "Duration":"3.5"}
    ]
   }
  constructor() { }
}
