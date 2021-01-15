import { Component, OnInit } from '@angular/core';
import {ProfilsService} from '../../../services/profils.service';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.css']
})
export class ListProfilComponent implements OnInit {
  formGroup: FormGroup | any;
  status = true ;
  bo = false;
  profils: any;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private profilService: ProfilsService) { }

  ngOnInit(): void {
    this.profilService.getProfil().subscribe(data => {
      this.profils = data;
      console.log(data);
    }) ;
  }
  editProfil(babs: any): void{
     const idLibelle = document.getElementById('profile' + babs.id);
    // @ts-ignore
    // idLibelle.style.display = 'none';
     const idInput = document.getElementById('profil' + babs.id);
    // @ts-ignore
    // idInput.style.display = 'block';
    // @ts-ignore
     if (this.bo === false){

      // @ts-ignore
      idLibelle.style.display = 'none';
      // @ts-ignore
      idInput.style.display = 'block';
    }
     this.bo = true;
  }
  // tslint:disable-next-line:typedef
  updateProfil(babs: any){
    const idLibelle = document.getElementById('profile' + babs.id);
  // @ts-ignore
  // idLibelle.style.display = 'none';
    const idInput = document.getElementById('profil' + babs.id);
    alert(this.bo);
    if ( this.bo === true) {
      // @ts-ignore
      if (idInput.value.trim() === '') {
         alert('Veuillez remplir le champ');
      }else {
        // @ts-ignore

        this.profilService.editProfil(idInput.value, babs.id).subscribe(
          data => {

            // mes alert pour la modification!!!
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            });
            // @ts-ignore
            idLibelle.innerText = idInput.value ;
            // @ts-ignore
            idLibelle.style.display = 'block';
            // @ts-ignore
            idInput.style.display = 'none';
            this.bo = false;
          }
        );
      }
    }
}




  // tslint:disable-next-line:typedef
  /*onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AjouterProfilsComponent, dialogConfig);
  }*/

  // tslint:disable-next-line:typedef
  AjoutProfil(addProfil: NgForm) {
    // @ts-ignore
    console.log((addProfil.value.libelle)) ;
    this.profilService.addProfil(addProfil.value.libelle).subscribe(reponse => {
      console.log(reponse);
    });
  }
  // tslint:disable-next-line:typedef
  removeProfil(id: number){
    console.log(id);
    this.profilService.deleteProfil(id).subscribe(reponse => {
      console.log(reponse);
    });
  }
}
