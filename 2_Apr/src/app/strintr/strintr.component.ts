import { Component } from '@angular/core';

@Component({
  selector: 'app-strintr',
  templateUrl: './strintr.component.html',
  styleUrls: ['./strintr.component.css']
})
export class STRINTRComponent {
  public Name = "Kamini Sanap"

  public Display()
  {
    return "My Name is Kamini Sanap";
  }
}
