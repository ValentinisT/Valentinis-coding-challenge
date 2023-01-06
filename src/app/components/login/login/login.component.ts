import { Component, ViewEncapsulation } from '@angular/core';
import { endaliaLogo } from 'src/app/constants';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

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
  loginUnsuccesfull$: Observable<boolean> = of(false)

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginUnsuccesfull$ = of(false)
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')]],
      pass: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const email = this.form.value.email || '';
    const pass = this.form.value.pass || '';
    const credentials = { username: email, password: pass }
    this.loginService.login(credentials).subscribe(loginSuc => {
      return loginSuc ? this.router.navigate(['/employees']) :
        this.loginUnsuccesfull$ = of(true)
    })

  }
}
