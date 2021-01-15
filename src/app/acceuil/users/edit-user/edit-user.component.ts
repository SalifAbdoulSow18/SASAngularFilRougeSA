import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UsersService} from '../../../services/users.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  nom = '';
  prenom = '';
  email = '';
  password = '';
  username = '' ;
  phone = '' ;
  address = '' ;
  photo = '' ;
  selectedFile = '';
  myForm: any = FormGroup ;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private userService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.myForm = this.formBuilder.group({
      prenom: ['', [ Validators.required]],
      nom: ['', [ Validators.required]],
      phone: ['', [ Validators.required]],
      username: ['', [ Validators.required]],
      address: ['', [ Validators.required]],
      photo: ['', [ Validators.required]],
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [ Validators.required, Validators.minLength(6)]],
    });
  }
  get f(): any {
    return this.myForm.controls;
  }

  uploadefiler(event: any): any {
    this.selectedFile =  event.target.files[0];
    /*  if (event.target.files){
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        // tslint:disable-next-line:no-shadowed-variable
        reader.onload = ( event: any) => {
          this.link = event.target.result;
        };
      }*/
  }

  onSubmit(): any {
    this.submitted = true;
    const idp = this.route.snapshot.params.id;
    const formValue = this.myForm.value;
    console.log(formValue);
    const formData = new FormData();
    for (const key of Object.keys(formValue)) {
      if (key !== 'photo') {
        const value = formValue[key];
        console.log(key, value);
        formData.append(key, value);
      }
    }
    console.log(this.selectedFile);
    formData.append('photo', this.selectedFile);
    // @ts-ignore
    this.userService.editUser(formData, idp).subscribe(reponse => {
        console.log(reponse);
      }, (error) => {
        console.log(error);
      }
    );
  }
}
