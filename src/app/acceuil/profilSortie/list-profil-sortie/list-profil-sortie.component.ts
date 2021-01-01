import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../services/users.service';
import {ProfilSortieService} from '../../../services/profil-sortie.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-list-profil-sortie',
  templateUrl: './list-profil-sortie.component.html',
  styleUrls: ['./list-profil-sortie.component.css']
})
export class ListProfilSortieComponent implements OnInit {
  status = true  ;
  statusInput = false;
  profilSorties: any;

  constructor(private profilsortieService: ProfilSortieService) {
    this.profilsortieService.getProfilSortie().subscribe(data => {
      this.profilSorties = data ;
      console.log(this.profilSorties);
    }) ;
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  AjoutProfilSortie(addProfilsorti: NgForm) {
    this.profilsortieService.addProfilSortie(addProfilsorti.value.libelle).subscribe(reponse => {
      console.log(reponse);
    });
  }
  // tslint:disable-next-line:typedef
  removeProfilSortie(id: number){
    this.profilsortieService.deleteProfilSortie(id).subscribe(reponse => {
      console.log(reponse);
    });
  }

  // La modification
  editProfilSortie(babs: any): void{
    const idLibelle = document.getElementById('profile' + babs.id);
    // @ts-ignore
    // idLibelle.style.display = 'none';
    const idInput = document.getElementById('profil' + babs.id);
    // @ts-ignore
    // idInput.style.display = 'block';
    // @ts-ignore
    if (this.statusInput === false){

      // @ts-ignore
      idLibelle.style.display = 'none';
      // @ts-ignore
      idInput.style.display = 'block';
    }
    this.statusInput = true;
  }
  // tslint:disable-next-line:typedef
  updateProfilSortie(babs: any){
    const idLibelle = document.getElementById('profile' + babs.id);
    // @ts-ignore
    // idLibelle.style.display = 'none';
    const idInput = document.getElementById('profil' + babs.id);
    alert(this.statusInput);
    if ( this.statusInput === true) {
      // @ts-ignore
      if (idInput.value.trim() === '') {
        alert('Veuillez remplir le champ');
      }else {
        // @ts-ignore

        this.profilsortieService.editProfilSortie(idInput.value, babs.id).subscribe(
          data => {
            // @ts-ignore
            idLibelle.innerText = idInput.value ;
            // @ts-ignore
            idLibelle.style.display = 'block';
            // @ts-ignore
            idInput.style.display = 'none';
            this.statusInput = false;
          }
        );
      }
    }
  }
}
