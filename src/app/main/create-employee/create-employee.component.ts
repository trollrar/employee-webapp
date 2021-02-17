import { Component, OnInit } from '@angular/core';
import {EmployeeDTO} from '../../../api/generated/model/employeeDTO';
import {EmployeeControllerService, EmployeeCreateDTO} from '../../../api/generated';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {


  employee: EmployeeCreateDTO = {} as EmployeeDTO;
  invalidFields = false;
  $employees: Observable<Array<EmployeeDTO>>;

  constructor(private controller: EmployeeControllerService, private router: Router) {
    this.$employees = controller.getEmployeesUsingGET();
  }

  ngOnInit(): void {
  }

  async save() {
    if (!this.employee.firstName || !this.employee.lastName || !this.employee.position) {
      this.invalidFields = true;
    }
    const result = await this.controller.createUsingPOST(this.employee).toPromise();
    this.router.navigate(['/employees']);
  }

}
