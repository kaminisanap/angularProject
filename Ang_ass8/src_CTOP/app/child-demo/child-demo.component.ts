import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrls: ['./child-demo.component.css']
})
export class ChildDemoComponent {
  @Output() public Myevent = new EventEmitter();
  
  public SendMessage()
  {
      this.Myevent.emit("Hello from child");
  }
}
