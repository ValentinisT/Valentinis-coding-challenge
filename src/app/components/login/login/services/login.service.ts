import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { LoginApiService } from './login-api.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private loginApiService: LoginApiService) { }

    login(credentials: { username: string, password: string }): Observable<boolean> {
        return this.loginApiService.getUsers().pipe(
            map((u: { users: { username: string, password: string }[]; }) => u && u.users.some(user => (user.username == credentials.username && user.password == credentials.password)))
        );
    }

}