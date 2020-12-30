import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-referentiel',
  templateUrl: './item-referentiel.component.html',
  styleUrls: ['./item-referentiel.component.css']
})
export class ItemReferentielComponent implements OnInit {
  // @ts-ignore
  @Input() referentiel: Referentiel;


  constructor() { }

  ngOnInit(): void {
  }

}
