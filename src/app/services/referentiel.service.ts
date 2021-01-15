import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {

  baseUrl = environment.api_url ;
  constructor(private httpClient: HttpClient) {}

  // tslint:disable-next-line:typedef
  getReferentiels(): Observable<any> {
    return this.httpClient.get( `${ this.baseUrl }/admin/referentiels`) ;
  }
  addReferentiel(referentiel: any): Observable<any> {
    return this.httpClient.post(`${ this.baseUrl }/admin/referentiels`, referentiel) ;
  }

  getReferentielById(id: number): Observable<any> {
    return this.httpClient.get( `${ this.baseUrl }/admin/referentiels/` + id) ;
  }
  editReferentiel(referentiel: any, id: number): Observable<any> {
    return this.httpClient.put(`${ this.baseUrl }/admin/referentiels/` + id, referentiel) ;
  }
  deleteReferentiel(id: number): Observable<any> {
    return this.httpClient.delete( `${ this.baseUrl }/admin/referentiels/` + id) ;
  }
}
