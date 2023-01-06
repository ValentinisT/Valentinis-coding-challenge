import { Employee, EmployeeVm } from 'src/app/models/employees';
import { EmployeesApiService } from './employees-api.service';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { sortEmployees } from '../components/employees/employees/employees-utils';

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {

    constructor(private employeesApiService: EmployeesApiService) { }

    getEmployeesList(): Observable<EmployeeVm[]> {
        return this.employeesApiService.getEmployees().pipe(
            map((e: { employees: Employee[] }) => {
                e.employees = sortEmployees(e.employees)
                return e.employees.map(employee => {
                    const [surname, name] = employee.fullName.split(",");
                    const { fullName, ...employeeWithoutFullName } = employee;
                    const employeeList: EmployeeVm = { ...employeeWithoutFullName, name: name, surname: surname }
                    return employeeList
                })
            }))
    }
}