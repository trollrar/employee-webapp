import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './main.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EmployeesComponent } from './employees/employees.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [MainComponent, EmployeesComponent, EditEmployeeComponent, CreateEmployeeComponent, EmployeeComponent],
  imports: [
    MainRoutingModule,
    CommonModule,
    NgbModule,
    FormsModule,
  ]
})
export class MainModule { }
