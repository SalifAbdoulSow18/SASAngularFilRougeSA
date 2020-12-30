import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ListUsersComponent } from './acceuil/users/list-users/list-users.component';
import { AddUserComponent } from './acceuil/users/add-user/add-user.component';
import { EditUserComponent } from './acceuil/users/edit-user/edit-user.component';
import { ListProfilComponent } from './acceuil/profils/list-profil/list-profil.component';
import { AddProfilComponent } from './acceuil/profils/add-profil/add-profil.component';
import { EditProfilComponent } from './acceuil/profils/edit-profil/edit-profil.component';
import { ListProfilSortieComponent } from './acceuil/profilSortie/list-profil-sortie/list-profil-sortie.component';
import { AddProfilSortieComponent } from './acceuil/profilSortie/add-profil-sortie/add-profil-sortie.component';
import { EditProfilSortieComponent } from './acceuil/profilSortie/edit-profil-sortie/edit-profil-sortie.component';
import { ListPromoComponent } from './acceuil/promos/list-promo/list-promo.component';
import { AddPromoComponent } from './acceuil/promos/add-promo/add-promo.component';
import { EditPromoComponent } from './acceuil/promos/edit-promo/edit-promo.component';
import { ListReferentielComponent } from './acceuil/referentiels/list-referentiel/list-referentiel.component';
import { AddReferentielComponent } from './acceuil/referentiels/add-referentiel/add-referentiel.component';
import { EditReferentielComponent } from './acceuil/referentiels/edit-referentiel/edit-referentiel.component';
import { EditCompetenceComponent } from './acceuil/competences/edit-competence/edit-competence.component';
import { ListCompetenceComponent } from './acceuil/competences/list-competence/list-competence.component';
import { AddCompetenceComponent } from './acceuil/competences/add-competence/add-competence.component';
import { AddGrpCompetenceComponent } from './acceuil/gpr-competences/add-grp-competence/add-grp-competence.component';
import { ListGrpCompetenceComponent } from './acceuil/gpr-competences/list-grp-competence/list-grp-competence.component';
import { EditGrpCompetenceComponent } from './acceuil/gpr-competences/edit-grp-competence/edit-grp-competence.component';
// tslint:disable-next-line:max-line-length
import { ItemGrpCompetenceComponent } from './acceuil/gpr-competences/list-grp-competence/item-grp-competence/item-grp-competence.component';
import { ItemReferentielComponent } from './acceuil/referentiels/list-referentiel/item-referentiel/item-referentiel.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { FormateurComponent } from './formateur/formateur.component';
import { ApprenantComponent } from './apprenant/apprenant.component';
import { CmComponent } from './cm/cm.component';
import {TokenInterceptor} from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    HeaderComponent,
    AcceuilComponent,
    ListUsersComponent,
    AddUserComponent,
    EditUserComponent,
    ListProfilComponent,
    AddProfilComponent,
    EditProfilComponent,
    ListProfilSortieComponent,
    AddProfilSortieComponent,
    EditProfilSortieComponent,
    ListPromoComponent,
    AddPromoComponent,
    EditPromoComponent,
    ListReferentielComponent,
    AddReferentielComponent,
    EditReferentielComponent,
    EditCompetenceComponent,
    ListCompetenceComponent,
    AddCompetenceComponent,
    AddGrpCompetenceComponent,
    ListGrpCompetenceComponent,
    EditGrpCompetenceComponent,
    ItemGrpCompetenceComponent,
    ItemReferentielComponent,
    FormateurComponent,
    ApprenantComponent,
    CmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
