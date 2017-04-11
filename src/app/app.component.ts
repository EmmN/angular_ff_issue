import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div>
    <h1>Working</h1>
    <input type="text" required [(ngModel)]="test.val" style="max-width: 100px" />
    <router-outlet></router-outlet>
  </div>
  `,
})
export class AppComponent  { 
  name = 'Angular'; 
  test = {
    val: ''
  };
}
