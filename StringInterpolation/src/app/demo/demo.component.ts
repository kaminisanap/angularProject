import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  public batch = "Mrvellous"
  public fees = 3000

  DisplayDetails(){
    return "this is marvellous";
  }
}
