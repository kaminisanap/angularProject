import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public str : string = "";

  public Getdata(name : string) {
      this.str = "String length is: "+name.length;
  } 
}
