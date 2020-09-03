import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserControllerService, UserRegisterDTO} from '../../../api/generated';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  user: UserRegisterDTO = {
    email: '',
    password: '',
    username: ''
  };

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserControllerService) {}

  ngOnInit() {
  }

  onSubmit() {
    this.userService.registerUsingPOST(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }

}
