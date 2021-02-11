import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../services/users.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-users-archive',
  templateUrl: './list-users-archive.component.html',
  styleUrls: ['./list-users-archive.component.css']
})
export class ListUsersArchiveComponent implements OnInit {

  p: number | undefined;
  search = '' ;
  users: any;

  constructor(private userService: UsersService, private router: Router) {
    this.userService.getUsersArchive().subscribe(data => {
      this.users = data ;
      console.log(this.users);
    }) ;
  }

  ngOnInit(): void {}

  /*transformPhoto(image: string): any {
    if (image === null) {
      return '../../../assets/images/SALogo.png' ;
    }else {
      return 'data:image/jpg;base64,' + image ;
    }
  }*/
}
