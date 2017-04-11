import { RouterModule }  from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NestedComponent } from './nested.component';

import { NestedRoutes }  from './nested.routes';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forChild(NestedRoutes) ],
  declarations: [ NestedComponent ],
  exports     : [ RouterModule ]
})
export class NestedModule { }
