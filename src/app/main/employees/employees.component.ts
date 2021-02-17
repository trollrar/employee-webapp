import {Component, OnInit} from '@angular/core';
import {EmployeeControllerService, UserDTO} from '../../../api/generated';
import {Observable} from 'rxjs';
import {EmployeeDTO} from '../../../api/generated/model/employeeDTO';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  $employees: Observable<EmployeeDTO[]>;
  private user: UserDTO;

  constructor(public controller: EmployeeControllerService, private authenticationService: AuthenticationService, private router: Router) {
    authenticationService.currentUser.subscribe(user => this.user = user);
    this.$employees = controller.getEmployeesUsingGET();
  }

  get isAdmin() {
    return this.user?.role === 'ADMIN' || false;
  }

  async delete(id: number) {
    console.log('asa');
    await this.controller.deleteEmployeeUsingDELETE(id).toPromise();
    console.log('aasfsa');
    this.router.navigate(['/employees']);
  }

  ngOnInit(): void {
  }
}
