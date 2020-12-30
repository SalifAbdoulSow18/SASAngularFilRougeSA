import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-grp-competence',
  templateUrl: './item-grp-competence.component.html',
  styleUrls: ['./item-grp-competence.component.css']
})
export class ItemGrpCompetenceComponent implements OnInit {
  // @ts-ignore
  @Input() gc: GrpCompetence;

  constructor() { }

  ngOnInit(): void {
  }

}
