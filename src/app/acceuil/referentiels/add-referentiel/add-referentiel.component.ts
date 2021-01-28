import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-referentiel',
  templateUrl: './add-referentiel.component.html',
  styleUrls: ['./add-referentiel.component.css']
})
export class AddReferentielComponent implements OnInit {

  competence = '' ;
  libelle = '' ;
  presentation = '' ;
  programme = '' ;
  critereEvaluation = '' ;
  critereAdmission = '' ;
  myForm: any = FormGroup ;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      competence: ['', [ Validators.required]],
      libelle: ['', [ Validators.required]],
      presentation: ['', [ Validators.required]],
      programme: ['', [ Validators.required]],
      critereEvaluation: ['', [ Validators.required]],
      critereAdmission: ['', [ Validators.required]],
    });
  }

  get f(): any {
    return this.myForm.controls;
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    const formValue = this.myForm.value ;
    console.log(formValue);
    const formData = new FormData();
    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      console.log(key, value);
      formData.append(key, value);
    }
  }

}
