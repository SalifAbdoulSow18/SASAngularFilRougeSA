import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {

  baseUrl = environment.api_url ;
  constructor(private httpClient: HttpClient) {}

  addCompetence(competences: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/admin/competences`, competences);
  }
  getCompetences(): Observable<any> {
    return this.httpClient.get( `${ this.baseUrl }/admin/competences?status=1`) ;
  }
  deleteCompetence(id: number): Observable<any> {
    return this.httpClient.delete( `${ this.baseUrl }/admin/competences/` + id) ;
  }
  editCompetence(competences: any, id: number): Observable<any> {
    return this.httpClient.put(`${ this.baseUrl }/admin/competences/` + id, competences) ;
  }
  getCompetencesById(id: number): Observable<any> {
    return this.httpClient.get( `${ this.baseUrl }/admin/competences/` + id) ;
  }
}
