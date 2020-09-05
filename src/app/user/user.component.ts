import {Component, OnInit} from '@angular/core';
import {UserControllerService, UserDTO} from '../../api/generated';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: UserDTO[];
  dtring: string;

  constructor(private userService: UserControllerService) {
  }

  ngOnInit() {
    this.userService.amIAdminUsingGET().subscribe(data => {
      this.dtring = data;
    });
    this.userService.getUsersUsingGET().subscribe(data => {
      this.users = data;
    });
  }

}
