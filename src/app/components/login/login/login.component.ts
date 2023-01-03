import { Component } from '@angular/core';
import { endaliaLogo } from 'src/app/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  endaliaLogo = endaliaLogo
}
