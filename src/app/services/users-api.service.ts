import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
    providedIn: 'root'
})
export class UsersApiService {

    constructor(private http: HttpClient) { }

    getUsers(): Observable<{ users: User[] }> {
        return this.http.get<{ users: User[] }>('/assets/users.json')
    }
}