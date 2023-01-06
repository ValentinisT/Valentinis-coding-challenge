import { Component } from '@angular/core';
import { UsersApiService } from './services/users-api.service';
import { LoginService } from './services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [LoginService, UsersApiService],

})
export class AppComponent {
  title = 'prueba-tecninca-endalia';
}
