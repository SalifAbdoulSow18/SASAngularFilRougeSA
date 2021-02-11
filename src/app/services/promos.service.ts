import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromosService {
  baseUrl = environment.api_url ;
  constructor(private httpClient: HttpClient) {}

  // tslint:disable-next-line:typedef
  getPromo(): Observable<any> {
    return this.httpClient.get( `${ this.baseUrl }/admin/promos`) ;
  }
  addPromo(promo: any): Observable<any> {
    return this.httpClient.post(`${ this.baseUrl }/admin/promos`, promo) ;
  }
}
