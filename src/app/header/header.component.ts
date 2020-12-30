import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthentificationService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  deconnexion() {
    const val = this.authService.logout() ;
    this.router.navigate(['/login']) ;
  }
}
