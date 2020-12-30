import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../services/users.service';
import {ProfilSortieService} from '../../../services/profil-sortie.service';

@Component({
  selector: 'app-list-profil-sortie',
  templateUrl: './list-profil-sortie.component.html',
  styleUrls: ['./list-profil-sortie.component.css']
})
export class ListProfilSortieComponent implements OnInit {

  profilSorties: any;

  constructor(private profilsortieService: ProfilSortieService) {
    this.profilsortieService.getProfilSortie().subscribe(data => {
      this.profilSorties = data ;
      console.log(this.profilSorties);
    }) ;
  }

  ngOnInit(): void {
  }

}
