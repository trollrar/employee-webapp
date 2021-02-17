import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainComponent} from './main.component';
import {UserComponent} from '../user/user.component';
import {AuthGuard} from '../shared/helpers/auth.guard';
import {UserDTO} from '../../api/generated';
import {EmployeesComponent} from './employees/employees.component';
import {CreateEmployeeComponent} from './create-employee/create-employee.component';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: EmployeesComponent
      },
      {
        path: 'create',
        component: CreateEmployeeComponent
      },
      {
        path: ':id/edit',
        component: EditEmployeeComponent
      },
      {
        path: ':id',
        component: EmployeesComponent,
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
