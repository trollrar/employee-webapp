import { Component, OnInit } from '@angular/core';
import {UserDTO} from '../../api/generated';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../shared/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: UserDTO;

  constructor(private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService) {
    authenticationService.currentUser.subscribe(user => this.user = user);
  }

  ngOnInit(): void {
  }

}
