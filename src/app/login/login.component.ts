import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../services/authentification.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  // @ts-ignore
  formLogin: FormGroup;
  submitted = false;

  constructor(private authService: AuthentificationService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    }) ;
  }

  // tslint:disable-next-line:typedef
  get f(){
    return this.formLogin.controls ;
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    this.submitted = true;
    this.authService.login(this.email, this.password).subscribe(data => {
        console.log(data) ;
      },
      err => console.log(err)) ;
  }

}
