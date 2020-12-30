import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-referentiel',
  templateUrl: './list-referentiel.component.html',
  styleUrls: ['./list-referentiel.component.css']
})
export class ListReferentielComponent implements OnInit {
  // @ts-ignore
  reference: Referentiel[] = [
    {
      id: 1,
      libelle: 'Développement Web et mobile',
      presentation: ' De l’analyse du besoin à la mise en ligne, en passant par l’interface et la base le·la développeur·se web conçoit et programme des applications web. ',
      programme: 'add le programme',
      critereEvaluation: 'Un portfolio comprenant la réalisation dau moins 9 projets tout au long de la formation',
      critereAdmission: 'Une soutenance devant un jury de professionnels',
    },
    {
      id: 2,
      libelle: 'Développement Full',
      presentation: ' De l’analyse du besoin à la mise en ligne, en passant par l’interface et la basede données, le·la développeur·se web conçoit et programme des applications web. ',
      programme: 'put le programme',
      critereEvaluation: 'Un portfolio comprenant la réalisation dau moins 9 projets tout au long de la formation',
      critereAdmission: 'Une soutenance devant un jury de professionnels',
    },
    {
      id: 3,
      libelle: 'Web et mobile',
      presentation: ' De l’analyse du besoin à la mise en ligne, en passant par l’interface et la base de données, le·la développeur·se web conçoit et programme des applications web. ',
      programme: 'uploader le programme',
      critereEvaluation: 'Un portfolio comprenant la réalisation dau moins 9 projets tout au long de la formation',
      critereAdmission: 'Une soutenance devant un jury de professionnels',
    },
    {
      id: 4,
      libelle: 'Développeur',
      presentation: ' De l’analyse du besoin à la mise en ligne, en passant par l’interface et la base web. ',
      programme: 'delete le programme',
      critereEvaluation: 'Un portfolio comprenant la réalisation dau moins 9 projets tout au long de la formation',
      critereAdmission: 'Une soutenance devant un jury de professionnels',
    },
    {
      id: 5,
      libelle: 'Développement mobile',
      presentation: ' De l’analyse du besoin à la mise en ligne, en passant par l’interface et la base ur·se web conçoit et programme des applications web. ',
      programme: 'update le programme',
      critereEvaluation: 'Un portfolio comprenant la réalisation dau moins 9 projets tout au long de la formation',
      critereAdmission: 'Une soutenance devant un jury de professionnels',
    },
    {
      id: 6,
      libelle: 'Développement Web',
      presentation: ' De l’analyse du besoin à la mise en ligne, en passant par l’interface. ',
      programme: 'uploader le programme',
      critereEvaluation: 'Un portfolio comprenant la réalisation dau moins 9 projets tout au long de la formation',
      critereAdmission: 'Une soutenance devant un jury de professionnels',
    },
  ] ;

  constructor() { }

  ngOnInit(): void {
  }

}
