import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Employee, EmployeeVm } from 'src/app/models/employees';
import { EmployeesApiService } from 'src/app/services/employees-api.service';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { filterEmployees, sortEmployees } from './employees-utils';

import { EmployeesComponent } from './employees.component';

describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [EmployeesComponent],
      providers: [EmployeesApiService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the employees component', () => {
    expect(component).toBeTruthy();
  });

  it('filter should start empty', () => {
    const fixture = TestBed.createComponent(EmployeesComponent)
    expect(fixture.componentInstance.filter).toBeFalsy()
  });


  it('filter should start empty', () => {
    const fixture = TestBed.createComponent(EmployeesComponent)
    expect(fixture.componentInstance.filter).toBeFalsy()
  });

  it('should filter by name, surname, fullname, telephone and email', () => {
    const fixture = TestBed.createComponent(EmployeesComponent)
    expect(filterEmployees("", employeesDummyList)).toEqual(employeesDummyList)
    expect(filterEmployees("Adam", employeesDummyList)).toEqual(employeeAdam)
    expect(filterEmployees("4966", employeesDummyList)).toEqual(employeeEric.concat(employeeAdam))
    expect(filterEmployees("williams, lEO JOFFrEY", employeesDummyList)).toEqual(employeeLeo)
    expect(filterEmployees("@yahoo.com", employeesDummyList)).toEqual(employeeAdam.concat(employeeLeo))
    expect(filterEmployees("Sección 1", employeesDummyList)).toEqual(employeeEric.concat(employeeLeo))
  });

  //dummy data to test filter
  const employeesDummyList: EmployeeVm[] =
    [
      {
        "name": "Eric Stephen",
        "surname": "taylor",
        "position": "Operario Sección 1",
        "profileImage": "https://xsgames.co/randomusers/assets/avatars/male/14.jpg",
        "telephone": 49668923,
        "email": "Stephen.taylor@outlook.com"
      },
      {
        "name": "Adam michael",
        "surname": "moore",
        "position": "Auditor de Medioambiente / Encargado de Producción",
        "profileImage": "https://xsgames.co/randomusers/assets/avatars/male/15.jpg",
        "telephone": 49665724,
        "email": "michael.moore@yahoo.com"
      },
      {
        "name": "Leo joffrey",
        "surname": "williams",
        "position": "Auditor de Calidad Sección 1",
        "profileImage": "https://xsgames.co/randomusers/assets/avatars/male/22.jpg",
        "telephone": 23328746,
        "email": "joffrey.williams@yahoo.com"
      },
    ]
  const employeeEric: EmployeeVm[] = [{
    "name": "Eric Stephen",
    "surname": "taylor",
    "position": "Operario Sección 1",
    "profileImage": "https://xsgames.co/randomusers/assets/avatars/male/14.jpg",
    "telephone": 49668923,
    "email": "Stephen.taylor@outlook.com"
  }]
  const employeeAdam: EmployeeVm[] = [{
    "name": "Adam michael",
    "surname": "moore",
    "position": "Auditor de Medioambiente / Encargado de Producción",
    "profileImage": "https://xsgames.co/randomusers/assets/avatars/male/15.jpg",
    "telephone": 49665724,
    "email": "michael.moore@yahoo.com"
  }]
  const employeeLeo: EmployeeVm[] = [{

    "name": "Leo joffrey",
    "surname": "williams",
    "position": "Auditor de Calidad Sección 1",
    "profileImage": "https://xsgames.co/randomusers/assets/avatars/male/22.jpg",
    "telephone": 23328746,
    "email": "joffrey.williams@yahoo.com"
  }]

})