import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  name = "marvellouS Infosystem";

  today = new Date();

  value = 32.8981254;

  Institute = {
    "name" : "Marvellous",
    "location" : "pune"
  }

}
