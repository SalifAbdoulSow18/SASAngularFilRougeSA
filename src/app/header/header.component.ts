import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';
import {UsersService} from '../services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  myData: any;
  infoConnect: any;
  photo: any;
  constructor(private authService: AuthentificationService, private router: Router, private userService: UsersService) {
    // @ts-ignore
    this.myData = localStorage.getItem('id');
    // console.log(this.myData);
    this.userService.getUserById(this.myData).subscribe(data => {
      this.infoConnect = data ;
      // console.log(this.infoConnect);
    });
  }

  ngOnInit(): void {
  }
  // Pour l'affichage des images
  transformPhoto(image: string): any {
    if (image === null) {
      return '../../../assets/images/SALogo.png' ;
    }else {
      return 'data:image/jpg;base64,' + image ;
    }
  }

  // tslint:disable-next-line:typedef
  deconnexion() {
    Swal.fire({
      title: 'Are you sure?',
      position: 'top-end',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, disconnect!'
    }).then((result) => {
      if (result.isConfirmed) {
        const val = this.authService.logout() ;
        this.router.navigate(['/login']) ;
      }
    });
  }
}
