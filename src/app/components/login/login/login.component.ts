import { Component, ViewEncapsulation } from '@angular/core';
import { endaliaLogo } from 'src/app/constants';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  endaliaLogo: string = endaliaLogo
  form: FormGroup<{
    email: FormControl<string | null>;
    pass: FormControl<string | null>;
  }>

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
      pass: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const email = this.form.value.email;
    const pass = this.form.value.pass;
    console.log("submited: ", this.form.value)
    console.log("submited: ", email)
    console.log("submited: ", pass)
  }
}
