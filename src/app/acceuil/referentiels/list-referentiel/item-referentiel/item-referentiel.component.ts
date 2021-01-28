import {Component, Input, OnInit} from '@angular/core';
import Swal from 'sweetalert2';
import {ReferentielService} from '../../../../services/referentiel.service';

@Component({
  selector: 'app-item-referentiel',
  templateUrl: './item-referentiel.component.html',
  styleUrls: ['./item-referentiel.component.css']
})
export class ItemReferentielComponent implements OnInit {
  // @ts-ignore
  @Input() referentiel: any;


  constructor(private referentielService: ReferentielService) { }

  ngOnInit(): void {}
  // tslint:disable-next-line:typedef
  removeGrpCompetence(id: number){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.referentielService.deleteReferentiel(id).subscribe(reponse => {
          console.log(reponse);
        });
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  }

}
