import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfilSortieService {

  baseUrl = environment.api_url ;
  constructor(private httpClient: HttpClient) {}

  // tslint:disable-next-line:typedef
  getProfilSortie() {
    return this.httpClient.get( `${ this.baseUrl }/admin/profilsorties`) ;
  }

  // tslint:disable-next-line:typedef
  addProfilSortie(libelle: string) {
    // @ts-ignore
    return this.httpClient.post( `${ this.baseUrl }/admin/profilsorties`, {libelle}) ;
  }
  // tslint:disable-next-line:typedef
  deleteProfilSortie() {
    return this.httpClient.delete( `${ this.baseUrl }/admin/profilsorties/{id}`) ;
  }
}
