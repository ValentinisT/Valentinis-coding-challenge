import { AuthGuard } from './guard/can-deactivate-guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./components/login/login/login.module').then(m => m.LoginModule) },
  { path: 'employees', loadChildren: () => import('./components/employees/employees/employees.module').then(m => m.EmployeesModule), canActivate: [AuthGuard] },
  { path: '**', loadChildren: () => import('./components/page-not-found/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
