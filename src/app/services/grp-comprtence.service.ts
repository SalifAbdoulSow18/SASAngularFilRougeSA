import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrpComprtenceService {
  baseUrl = environment.api_url ;
  constructor(private httpClient: HttpClient) {}

  // tslint:disable-next-line:typedef
  getGrpCompetences() {
    return this.httpClient.get( `${ this.baseUrl }/admin/groupe_competences/competences?status=1`) ;
  }
  deleteGrpCompetences(id: number): Observable<any> {
    return this.httpClient.delete( `${ this.baseUrl }/admin/groupe_competences/` + id) ;
  }
}
