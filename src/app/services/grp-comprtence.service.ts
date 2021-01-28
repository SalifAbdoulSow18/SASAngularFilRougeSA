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

  addGrpCompetence(grpCompetence: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/admin/groupe_competences`, grpCompetence);
  }
  getGrpCompetences(): Observable<any> {
    return this.httpClient.get( `${ this.baseUrl }/admin/groupe_competences/competences?status=1`) ;
  }
  getGrpCompetencesById(id: number): Observable<any> {
    return this.httpClient.get( `${ this.baseUrl }/admin/groupe_competences/` + id) ;
  }
  // tslint:disable-next-line:variable-name
  editGrpCompetence(groupeCompetence: any, id: number): Observable<any> {
    return this.httpClient.put(`${ this.baseUrl }/admin/groupe_competences/` + id, groupeCompetence) ;
  }
  deleteGrpCompetences(id: number): Observable<any> {
    return this.httpClient.delete( `${ this.baseUrl }/admin/groupe_competences/` + id) ;
  }
}
