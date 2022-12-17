import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from '../calendar/calendar.component';
import { FormComponent } from '../form/form.component';

const appRoutes:Routes = [
  { path: '', component: CalendarComponent},
  { path: 'form', component: FormComponent },
];

@NgModule({
 
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
