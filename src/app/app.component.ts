import { Component } from '@angular/core';
import {AuthenticationService} from './shared/services/authentication.service';
import {UserDTO} from '../api/generated';
import RoleEnum = UserDTO.RoleEnum;
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webapp';
  currentUser: UserDTO;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === RoleEnum.ADMIN;
  }
}
