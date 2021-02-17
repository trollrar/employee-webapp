import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmployeeControllerService, EmployeeDTO} from '../../../api/generated';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee: EmployeeDTO;
  $isSupervising: Observable<EmployeeDTO[]>;
  employeeId = +this.route.snapshot.params.id;

  constructor(private route: ActivatedRoute, private controller: EmployeeControllerService) {
    this.controller.getEmployeeUsingGET(this.employeeId).subscribe(e => this.employee = e);
    this.$isSupervising = this.controller.getSupervisedEmployeesUsingGET(this.employeeId);
  }

  ngOnInit(): void {
  }

}
