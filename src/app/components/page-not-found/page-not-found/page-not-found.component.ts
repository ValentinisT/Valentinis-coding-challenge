import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { pageNotFoundImage } from 'src/app/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.sass']
})
export class PageNotFoundComponent {
  pageNotFoundImage: string = pageNotFoundImage

  constructor(private router: Router, private loginService: LoginService) { }

  goToLogin() {
    this.router.navigate(['/employees'])
    localStorage.clear();
    this.loginService.logout()
  }
}
