import { Component, OnInit } from '@angular/core';
import {ReferentielService} from '../../../services/referentiel.service';
import {GrpComprtenceService} from '../../../services/grp-comprtence.service';

@Component({
  selector: 'app-list-grp-competence',
  templateUrl: './list-grp-competence.component.html',
  styleUrls: ['./list-grp-competence.component.css']
})
export class ListGrpCompetenceComponent implements OnInit {
  p: number | undefined;
  grpCompetences: any;

  constructor(private grpCompetenceService: GrpComprtenceService) {
    this.grpCompetenceService.getGrpCompetences().subscribe(data => {
      this.grpCompetences = data ;
      console.log(this.grpCompetences);
    }) ;
  }

  ngOnInit(): void {
  }

}
