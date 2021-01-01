import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../../services/users.service';
import {ReferentielService} from '../../../services/referentiel.service';

@Component({
  selector: 'app-list-referentiel',
  templateUrl: './list-referentiel.component.html',
  styleUrls: ['./list-referentiel.component.css']
})
export class ListReferentielComponent implements OnInit {
  referentiels: any;

  constructor(private referentielService: ReferentielService) {
    this.referentielService.getReferentiels().subscribe(data => {
      this.referentiels = data ;
      console.log(this.referentiels);
    }) ;
  }

  ngOnInit(): void {
  }

}
