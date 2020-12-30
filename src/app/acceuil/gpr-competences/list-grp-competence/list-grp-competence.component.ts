import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-grp-competence',
  templateUrl: './list-grp-competence.component.html',
  styleUrls: ['./list-grp-competence.component.css']
})
export class ListGrpCompetenceComponent implements OnInit {
  // @ts-ignore
  grpCompetence: GrpCompetence[] = [
    {
      id: 1,
      libelle: 'Développement Web et mobile',
      description: ' De l’analyse du besoin à la mise en ligne, en passant par l’interface et la base le·la développeur·se web conçoit et programme des applications web. ',
      competence: 'competence1',
      tag: 'tag1',
    },
    {
      id: 2,
      libelle: 'Développement Full',
      description: ' De l’analyse du besoin à la mise en ligne, en passant par l’interface et la basede données, le·la développeur·',
      competence: 'competence2',
      tag: 'tag2',
    },
    {
      id: 3,
      libelle: 'Web et mobile',
      description: ' De l’analyse du besoin à la mise en ligne, en passant par l’interface et la base de données, le·la développeur·se web conçoit et programme des applications web. ',
      competence: 'competence3',
      tag: 'tag3',
    },
    {
      id: 4,
      libelle: 'Développeur',
      description: ' De l’analyse du besoin à la mise en ligne, en passant par l’interface et la base web. ',
      competence: 'delete le programme',
      tag: 'tag4',
    },
    {
      id: 5,
      libelle: 'Développement mobile',
      description: ' De l’analyse du besoin à la mise en ligne, en passant par l’interface et la base ur·se web conçoit et programme des applications web. ',
      competence: 'competence5',
      tag: 'tag5',
    },
    {
      id: 6,
      libelle: 'Développement Web',
      description: ' De l’analyse du besoin à la mise en ligne, en passant par l’interface. ',
      competence: 'competence6',
      tag: 'tag6',
    },
  ] ;

  constructor() { }

  ngOnInit(): void {
  }

}
