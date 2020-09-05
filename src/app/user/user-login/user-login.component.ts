import {Component, OnInit, Optional} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Configuration, UserControllerService, UserLoginDTO} from '../../../api/generated';
import {AuthenticationService} from '../../shared/authentication/authentication.service';

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
              private authorizationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  async onSubmit() {
    const user = await this.authorizationService.login(this.user).toPromise();
    if (!!user) { this.gotoUserList(); }
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
