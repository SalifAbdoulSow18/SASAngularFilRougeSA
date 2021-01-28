import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GrpComprtenceService} from '../../../services/grp-comprtence.service';
import {ReferentielService} from '../../../services/referentiel.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {ListItem} from 'ng-multiselect-dropdown/multiselect.model';

@Component({
  selector: 'app-edit-referentiel',
  templateUrl: './edit-referentiel.component.html',
  styleUrls: ['./edit-referentiel.component.css']
})
export class EditReferentielComponent implements OnInit {

  idEdit: any ;
  gprCompetence = '' ;
  libelle = '' ;
  presentation = '' ;
  programme = '' ;
  critereEvaluation = '' ;
  critereAdmission = '' ;
  myForm: any = FormGroup ;
  submitted = false;
  // tslint:disable-next-line:ban-types
  dropdownList: any;
  selectedItems = [];
  dropdownSettings = {};
  constructor(private formBuilder: FormBuilder,
              private activatedRoute: ActivatedRoute,
              private grpCompetenceService: GrpComprtenceService,
              private referentielService: ReferentielService,
              private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
      (params: Params) => {
        const id = params.id;
        this.idEdit = +id;
        this.referentielService.getReferentielById(this.idEdit).subscribe(
          data => {
            console.log(data);
            this.selectedItems = data.groupeCompetences ;
            this.libelle = data.libelle;
            this.critereAdmission = data.critereAdmission;
            this.critereEvaluation = data.critereEvaluation;
            this.presentation = data.presentation;
            this.programme = data.programme;
          }, error => {
            console.log(error);
          }
        );
      }
    );
    this.grpCompetenceService.getGrpCompetences().subscribe(
      data => {
        console.log(data);
        this.dropdownList = data;
      }, error => {
        console.log(error);
      }
    );
    this.myForm = this.formBuilder.group({
      gprCompetence: ['', [ Validators.required]],
      libelle: ['', [ Validators.required]],
      presentation: ['', [ Validators.required]],
      programme: ['', [ Validators.required]],
      critereEvaluation: ['', [ Validators.required]],
      critereAdmission: ['', [ Validators.required]],
    });
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'libelle',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };
  }

  get f(): any {
    return this.myForm.controls;
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    const formValue = this.myForm.value ;
    console.log(formValue);
    const myReferentiel = {
      libelle: formValue.libelle,
      groupeCompetences: formValue.gprCompetence,
      programme : formValue.programme,
      presentation: formValue.presentation,
      critereEvaluation: formValue.critereEvaluation,
      critereAdmission : formValue.critereAdmission,
    };
    console.log(myReferentiel);
    this.referentielService.editReferentiel(myReferentiel, this.idEdit).subscribe(
      data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 2500
        });
        setTimeout(() => {this.router.navigate(['/home', 'list-referentiels']); }, 3000);
        console.log('good');
      }, error => {
        console.log(error);
      }
    );
  }

  // tslint:disable-next-line:typedef
  onItemSelect($event: ListItem) {}

  // tslint:disable-next-line:typedef
  onSelectAll($event: Array<ListItem>) {}

}
