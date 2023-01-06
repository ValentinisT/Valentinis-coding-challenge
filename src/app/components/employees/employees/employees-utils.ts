import { Employee, EmployeeVm } from "src/app/models/employees";

export function filterEmployees(filter: string, employees: EmployeeVm[]) {
    if (!filter) return employees
    return employees.filter(employee => {
        const f = filter.toLocaleLowerCase();
        const e = employee;
        // para una búsqueda mas eficiente se permitió filtrar como nombre y apellido asi como apellido y luego nombre
        // aparte de sus propiedades individuales
        const properties = [e.telephone.toString().toLocaleLowerCase(), e.name.toLocaleLowerCase(), e.surname.toLocaleLowerCase(), e.position.toLocaleLowerCase(), e.email.toLocaleLowerCase()];
        const filterByNameAndSurname = (e.name.toLocaleLowerCase() + ' ' + e.surname.toLocaleLowerCase()).includes(f)
        const filterBySurnameAndName = (e.surname.toLocaleLowerCase() + ' ' + e.name.toLocaleLowerCase()).includes(f)
        const filterByFullname = (e.surname.toLocaleLowerCase() + ', ' + e.name.toLocaleLowerCase()).includes(f)
        return properties.some(property => property.includes(f) || filterByNameAndSurname || filterBySurnameAndName || filterByFullname)
    })
}

export function sortEmployees(employees: Employee[]) {
    return employees.sort((a, b) => {
        if (a.fullName < b.fullName) {
            return -1;
        }
        if (a.fullName > b.fullName) {
            return 1;
        }
        return 0;
    });
}