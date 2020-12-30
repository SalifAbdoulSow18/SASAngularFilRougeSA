import { Component, OnInit } from '@angular/core';
import {ProfilsService} from '../../../services/profils.service';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.css']
})
export class ListProfilComponent implements OnInit {

  profils: any;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private profilService: ProfilsService) { }

  ngOnInit(): void {
    this.profilService.getProfil().subscribe(data => {
      this.profils = data;
      console.log(data);
    }) ;
  }

  // tslint:disable-next-line:typedef
  /*onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(AjouterProfilsComponent, dialogConfig);
  }*/

}
