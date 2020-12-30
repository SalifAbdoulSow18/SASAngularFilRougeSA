import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: any;

  constructor(private userService: UsersService) {
    this.userService.getUsers().subscribe(data => {
      this.users = data ;
      console.log(this.users);
    }) ;
  }

  ngOnInit(): void {
  }


}
