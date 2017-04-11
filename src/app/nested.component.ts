import { Component } from '@angular/core';

@Component({
  template: `
  <div>
    <h1>Not Working</h1>
    <input type="text" required [(ngModel)]="test.val" style="max-width: 100px" />
  </div>
  `,
})
export class NestedComponent  { 
  test = {
    val: ''
  };
}
