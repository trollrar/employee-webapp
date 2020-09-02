import {Component, OnInit} from '@angular/core';
import {UserControllerService, UserModel} from '../../api/generated';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: UserModel[];

  constructor(private userService: UserControllerService) {
  }

  ngOnInit() {
    this.userService.getUsersUsingGET().subscribe(data => {
      this.users = data;
    });
  }

}
