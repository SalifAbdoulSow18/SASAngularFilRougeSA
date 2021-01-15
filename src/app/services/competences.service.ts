import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompetencesService {

  baseUrl = environment.api_url ;
  constructor(private httpClient: HttpClient) {}

  // tslint:disable-next-line:typedef
  getCompetences() {
    return this.httpClient.get( `${ this.baseUrl }/admin/competences`) ;
  }
}
