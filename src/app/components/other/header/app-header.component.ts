import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../../services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.sass']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$ = new Observable<boolean>();

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.isLoggedIn$ = this.loginService.getIsLoggedIn()
  }

  onLogout() {
    this.loginService.logout();
    localStorage.clear()
  }
}
