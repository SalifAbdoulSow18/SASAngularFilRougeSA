import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-grp-competence',
  templateUrl: './item-grp-competence.component.html',
  styleUrls: ['./item-grp-competence.component.css']
})
export class ItemGrpCompetenceComponent implements OnInit {
  // @ts-ignore
  @Input() groupeCompetence: any;

  constructor() {
    console.log(this.groupeCompetence);
  }

  ngOnInit(): void {
  }

}
