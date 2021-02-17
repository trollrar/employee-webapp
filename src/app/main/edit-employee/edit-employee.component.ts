import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeControllerService, EmployeeDTO, EmployeeUpdateDTO} from '../../../api/generated';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  employeeId = +this.route.snapshot.params.id;
  $employees: Observable<Array<EmployeeDTO>>;
  employee: EmployeeUpdateDTO;
  invalidFields = false;

  constructor(private route: ActivatedRoute, private controller: EmployeeControllerService, private router: Router) {
    this.$employees = controller.getEmployeesUsingGET();
    this.$employees.subscribe(empl => {
      const employee = empl.find(e => e.id === this.employeeId);
      this.employee = {...employee, supervisorId: employee.supervisor?.id};
    });
  }

  ngOnInit(): void {
  }

  async save() {
    if (!this.employee.firstName || !this.employee.lastName || !this.employee.position) {
      this.invalidFields = true;
    }
    const result = await this.controller.updateUsingPUT(this.employee).toPromise();
    this.router.navigate(['/employees']);
  }
}
