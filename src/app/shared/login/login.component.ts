import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserLoginDTO} from '../../../api/generated';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: UserLoginDTO = {
    password: '',
    username: ''
  };
  public rememberMe = false;
  private error: string;

  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    const username = localStorage.getItem(USERNAME_KEY);
    if (!!username) {
      this.user.username = username;
      this.rememberMe = true;
    }
  }

  // convenience getter for easy access to form fields

  onSubmit() {
    if (this.rememberMe) {
      localStorage.setItem(USERNAME_KEY, this.user.username);
    } else {
      localStorage.removeItem(USERNAME_KEY);
    }

    this.authenticationService.login(this.user)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
        });
  }
}

export const USERNAME_KEY = 'rememberedUsername';

