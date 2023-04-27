import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Batches = ["PPA", "LB", "Angular","Python","LSP"];
  public Fees = [1000,15,5654,2]
}
