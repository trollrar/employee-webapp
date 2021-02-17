import { Component } from '@angular/core';
import {AuthenticationService} from './shared/services/authentication.service';
import {UserDTO} from '../api/generated';
import RoleEnum = UserDTO.RoleEnum;
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webapp';
  currentUser: UserDTO;

  public currentUrl = '';
  public user: UserDTO;
  isCollapsed = true;

  constructor(private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService) {
    authenticationService.currentUser.subscribe(user => this.user = user);
  }

  get isAdmin() {
    return this.user?.role === 'ADMIN' || false;
  }

  public isMenuActive(menu: string) {
    return menu === this.route.firstChild?.routeConfig.path;
  }

  logout() {
    this.authenticationService.logout();
  }

  login() {
    this.router.navigate(['/login']);
  }
}
