import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilsService {

  baseUrl = environment.api_url ;
  constructor(private httpClient: HttpClient) {}

  // tslint:disable-next-line:typedef
  getProfil() {
    return this.httpClient.get( `${ this.baseUrl }/admin/profils`) ;
  }

  // tslint:disable-next-line:typedef
  addProfil(libelle: string) {
    // @ts-ignore
    return this.httpClient.post( `${ this.baseUrl }/admin/profils`, {libelle}) ;
  }
  // tslint:disable-next-line:typedef
  deleteProfil() {
    return this.httpClient.delete( `${ this.baseUrl }/admin/profils/{id}`) ;
  }
}
