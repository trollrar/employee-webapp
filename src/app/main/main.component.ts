import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Route, Router, RouterEvent} from '@angular/router';
import {AuthenticationService} from '../shared/authentication/authentication.service';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public currentUrl = '';

  constructor(private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService) {}

  public isMenuActive(menu: string) {
    return menu === this.route.firstChild.routeConfig.path;
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}
