import { Employee } from 'src/app/models/employees';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmployeesApiService {

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<{ employees: Employee[] }> {
        return this.http.get<{ employees: Employee[] }>('/assets/employees.json')
    }
}