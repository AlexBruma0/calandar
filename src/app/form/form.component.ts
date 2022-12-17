import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      name: new FormControl(),
    });
  }
  onSubmit(value) {
    console.log(value);
  }
}
