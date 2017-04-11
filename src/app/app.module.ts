import { RouterModule }  from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppWrapperComponent } from './app_wrapper.component';

import { NestedModule } from './nested.module';

import { AppRoutes }      from './app.routes';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(AppRoutes), NestedModule ],
  declarations: [ AppComponent, AppWrapperComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
