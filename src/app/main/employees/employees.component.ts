import {Component, OnInit} from '@angular/core';
import {EmployeeControllerService} from '../../../api/generated';
import {Observable} from 'rxjs';
import {EmployeeDTO} from '../../../api/generated/model/employeeDTO';
import {MainService} from '../main.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor(public service: MainService) {}

  ngOnInit(): void {
  }
}
