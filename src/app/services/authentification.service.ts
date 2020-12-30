import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient, private router: Router) {
  }

  // tslint:disable-next-line:new-parens
  helpers = new JwtHelperService;
  baseUrl = environment.api_url;

  // tslint:disable-next-line:typedef
  login(email: string, password: string) {
    console.log(this.baseUrl);
    return this.http.post(this.baseUrl + '/login', {
      email, password
    })
      .pipe(
        map ((response: any ) => {
          const tokenDecode = this.helpers.decodeToken(response.token);
          console.log(tokenDecode);

          // stockage de token d'un users dans le localStorage!!!
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', tokenDecode.roles);
          // la redirection à partir des roles
          if (localStorage.getItem('role') === 'ROLE_ADMIN') {
            console.log(localStorage.getItem('role'));
            this.router.navigate(['/home']);
          } else if (localStorage.getItem('role') === 'ROLE_FORMATEUR'){
            this.router.navigate(['/formateur']);
          } else if (localStorage.getItem('role') === 'ROLE_CM'){
            this.router.navigate(['/cm']);
          } else if (localStorage.getItem('role') === 'ROLE_APPRENANT'){
            this.router.navigate(['/apprenant']);
          } else {
            console.log( 'veuillez reverifier vos données!!!' ) ;
          }
        })
      ) ;
  }
  // tslint:disable-next-line:typedef
    getToken(key: string) {
      const token = localStorage.getItem('token');
      if (token !== 'undifined') {
        return token;
      }else {
        return null;
      }
    }

  // tslint:disable-next-line:typedef
  logout() {
    return localStorage.removeItem('token') ;
  }
}
