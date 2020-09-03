import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Configuration, UserControllerService, UserLoginDTO} from '../../../api/generated';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  user: UserLoginDTO = {
    password: '',
    username: ''
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserControllerService,
              private configuration: Configuration) {}

  ngOnInit() {
  }

  onSubmit() {
    this.userService.loginUsingPOST(this.user).subscribe(result => {
      this.configuration.apiKeys.Authorization = 'Bearer ' + result.token;
      this.gotoUserList();
    });
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
