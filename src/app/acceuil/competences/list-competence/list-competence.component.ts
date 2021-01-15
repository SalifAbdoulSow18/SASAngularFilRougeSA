import { Component, OnInit } from '@angular/core';
import {CompetencesService} from '../../../services/competences.service';

@Component({
  selector: 'app-list-competence',
  templateUrl: './list-competence.component.html',
  styleUrls: ['./list-competence.component.css']
})
export class ListCompetenceComponent implements OnInit {

  Competences: any;

  constructor(private CompetenceService: CompetencesService) {
    this.CompetenceService.getCompetences().subscribe(data => {
      this.Competences = data ;
      console.log(this.Competences);
    }) ;
  }

  ngOnInit(): void {
  }

}
