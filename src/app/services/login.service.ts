import { BehaviorSubject, map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersApiService } from './users-api.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private loggedIn = new BehaviorSubject<boolean>(false);

    constructor(private UsersApiService: UsersApiService, private router: Router) {
        if (localStorage.getItem('username')) {
            this.setIsLoggedIn(true)
        }
    }

    getIsLoggedIn(): Observable<boolean> {
        return this.loggedIn.asObservable();
    }

    setIsLoggedIn(value: boolean) {
        this.loggedIn.next(value)
    }

    login(credentials: { username: string, password: string }): Observable<boolean> {
        return this.UsersApiService.getUsers().pipe(
            map((u: { users: User[] }) => {
                const loginSuccessfull: boolean =
                    u && u.users.some(user => (user.username == credentials.username && user.password == credentials.password))
                this.setIsLoggedIn(loginSuccessfull)
                //Lo agregamos al local storage para chequear luego si se encuentra autenticado
                if (loginSuccessfull) localStorage.setItem('username', credentials.username);
                return loginSuccessfull
            })
        );
    }

    logout() {
        this.setIsLoggedIn(false)
        this.router.navigate(['/login'])
    }
}