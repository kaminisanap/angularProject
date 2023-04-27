
//ng generate component Demo --inline-template=true --inline-style=true

import { Component } from '@angular/core';

@Component({
  selector: 'app-secondcomp',
  template: `
    <h1>Inside Second Component</h1>
    <h2>Inside Second Component</h2>
  `,
  styles: [
  `
    h1{
      color: red
    }
    h2{
      color: green
    }
  `
  ]
})
export class SecondcompComponent {

}



