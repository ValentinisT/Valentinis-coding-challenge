import { Component, ViewEncapsulation } from '@angular/core';
import { EmployeesService } from '../../../services/employees.service';
import { EmployeeVm } from 'src/app/models/employees';
import { filterEmployees } from './employees-utils';
import { Observable, of, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.sass'],
  encapsulation: ViewEncapsulation.None

})
export class EmployeesComponent {
  employeesList$!: Observable<EmployeeVm[]>
  filteredEmployeesList$!: Observable<EmployeeVm[]>
  filter!: string

  private unsubscribe: Subject<void> = new Subject<void>()

  constructor(private employeesService: EmployeesService) { }

  ngOnInit() {
    this.employeesList$ = this.employeesService.getEmployeesList()
    this.filteredEmployeesList$ = this.employeesList$
  }

  filterList() {
    this.employeesList$.pipe(takeUntil(this.unsubscribe)).subscribe(employees => {
      this.filteredEmployeesList$ = of(filterEmployees(this.filter, employees))
    })
  }

  ngOnDestroy() {
    this.unsubscribe.next()
    this.unsubscribe.complete()
  }
}

