import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  studentForm: FormGroup = new FormGroup({
    Name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    address: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zip: new FormControl(),

  })

  formvalue: any

  onsave() {
    this.formvalue = this.studentForm.value
  }

}
