import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../shared/services/authentication.service';
import {UserDTO} from '../../api/generated';

declare var $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

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
