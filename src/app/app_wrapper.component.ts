import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: `
  <div></div>
  `,
})
export class AppWrapperComponent implements OnInit { 
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){ }

  ngOnInit() {
    this.router.navigate(['/nested'], {preserveQueryParams: true})
  }
}
