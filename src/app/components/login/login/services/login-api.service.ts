import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginApiService {

    constructor(private http: HttpClient) { }

    getUsers(): Observable<{ users: { username: string, password: string }[] }> {
        return this.http.get<{ users: { username: string, password: string }[] }>('/assets/users.json').pipe(
            catchError(() => {
                return throwError(() => new Error("Error getting the users"))
            })
        );
    }
}