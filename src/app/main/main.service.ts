import { Injectable } from '@angular/core';
import {EmployeeControllerService} from '../../api/generated';
import {Observable} from 'rxjs';
import {EmployeeDTO} from '../../api/generated/model/employeeDTO';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  $employees: Observable<EmployeeDTO[]>;

  constructor(private controller: EmployeeControllerService) {
    this.$employees = controller.getEmployeesUsingGET();
  }
}
