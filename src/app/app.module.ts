import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent} from './form/form.component'
import { CalendarComponent} from './calendar/calendar.component'
import {ReactiveFormsModule} from '@angular/forms';
 import {RoutingModule} from './routing/routing.module'

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, RoutingModule],
  declarations: [ AppComponent, CalendarComponent, FormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
