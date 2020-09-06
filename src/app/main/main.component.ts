import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Route, Router, RouterEvent} from '@angular/router';
import {AuthenticationService} from '../shared/services/authentication.service';
import {filter, map} from 'rxjs/operators';
import {UserDTO} from '../../api/generated';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public currentUrl = '';
  public user: UserDTO;

  constructor(private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService) {
    authenticationService.currentUser.subscribe(user => this.user = user);
  }

  get isAdmin() {
    return this.user?.role === 'ADMIN';
  }

  public isMenuActive(menu: string) {
    return menu === this.route.firstChild.routeConfig.path;
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
  }

  login() {
    this.router.navigate(['/login']);
  }
}
