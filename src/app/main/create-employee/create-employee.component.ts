import { Component, OnInit } from '@angular/core';
import {EmployeeDTO} from '../../../api/generated/model/employeeDTO';
import {EmployeeControllerService} from '../../../api/generated';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {


  employee: EmployeeDTO = {} as EmployeeDTO;
  invalidFields = false;

  constructor(private controller: EmployeeControllerService) { }

  ngOnInit(): void {
  }

  save() {
    console.log(this.employee);
    if (!this.employee.firstName || !this.employee.lastName || !this.employee.position) {
      this.invalidFields = true;
    }
    this.controller.createUsingPOST(this.employee);
  }

}
