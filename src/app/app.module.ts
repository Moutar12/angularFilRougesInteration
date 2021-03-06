import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { BriefsComponent } from './header/briefs/briefs.component';
import { RendusComponent } from './header/rendus/rendus.component';
import { ExplorerComponent } from './header/explorer/explorer.component';
import { ForumComponent } from './header/forum/forum.component';
import { HistoriqueDesPromosComponent } from './header/historique-des-promos/historique-des-promos.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PromosComponent } from './header/promos/promos.component';
import { ReferentielsComponent } from './header/referentiels/referentiels.component';
import { GroupeDeCompetencesComponent } from './header/groupe-de-competences/groupe-de-competences.component';
import { CompetencesComponent } from './header/competences/competences.component';
import { GroupesTagsComponent } from './header/groupes-tags/groupes-tags.component';
import { ProfilDeSortieComponent } from './header/profil-de-sortie/profil-de-sortie.component';
import { ProfilComponent } from './header/profil/profil.component';
import { CreateReferentielComponent } from './header/referentiels/create-referentiel/create-referentiel.component';
import { ListGroupeCompetenceComponent } from './header/groupe-de-competences/list-groupe-competence/list-groupe-competence.component';
import { EditeGroupeCompetenceComponent } from './header/groupe-de-competences/list-groupe-competence/edite-groupe-competence/edite-groupe-competence.component';
import { ListeReferentielsComponent } from './header/referentiels/liste-referentiels/liste-referentiels.component';
import { ItemReferentilComponent } from './header/referentiels/liste-referentiels/item-referentil/item-referentil.component';
import { ListeCompetenceComponent } from './header/competences/liste-competence/liste-competence.component';
import { UsersComponent } from './header/users/users.component';
import { ListesUsersComponent } from './header/users/listes-users/listes-users.component';
import { ItemUsersComponent } from './header/users/add-user/item-users/item-users.component';
import { AddUserComponent } from './header/users/add-user/add-user.component';
import { ListesProfilComponent } from './header/profil/listes-profil/listes-profil.component';
import { EditeProfilComponent } from './header/profil/edite-profil/edite-profil.component';
import { DetailProfilComponent } from './header/profil/detail-profil/detail-profil.component';
import {ServiceInterceptorInterceptor} from './service-interceptor.interceptor';
import { AddProfilComponent } from './header/profil/add-profil/add-profil.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { DetailUsersComponent } from './header/users/detail-users/detail-users.component';
import { EditUsersComponent } from './header/users/listes-users/edit-users/edit-users.component';
import {CreateGroupeCompetenceComponent} from "./header/groupe-de-competences/create-groupe-competence/create-groupe-competence.component";
import { ItemGroupeCompetenceComponent } from './header/groupe-de-competences/list-groupe-competence/item-groupe-competence/item-groupe-competence.component';
import { EditeReferentielsComponent } from './header/referentiels/liste-referentiels/edite-referentiels/edite-referentiels.component';
import {LoginGuard} from "./guard/login.guard";
import { FiltrePipePipe } from './filtre-pipe.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ServiceDetailPromisePipe } from './service-detail-promise.pipe';
import { ItemCompetenceComponent } from './header/competences/liste-competence/item-competence/item-competence.component';
import { AddCompetenceComponent } from './header/competences/add-competence/add-competence.component';
import { EditCompetenceComponent } from './header/competences/edit-competence/edit-competence.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    BriefsComponent,
    RendusComponent,
    ExplorerComponent,
    ForumComponent,
    HistoriqueDesPromosComponent,
    PromosComponent,
    ReferentielsComponent,
    GroupeDeCompetencesComponent,
    CompetencesComponent,
    GroupesTagsComponent,
    ProfilDeSortieComponent,
    ProfilComponent,
    CreateReferentielComponent,
    ListGroupeCompetenceComponent,
    CreateGroupeCompetenceComponent,
    EditeGroupeCompetenceComponent,
    ListeReferentielsComponent,
    ItemReferentilComponent,
    ListeCompetenceComponent,
    UsersComponent,
    ListesUsersComponent,
    ItemUsersComponent,
    AddUserComponent,
    ListesProfilComponent,
    EditeProfilComponent,
    DetailProfilComponent,
    AddProfilComponent,
    DetailUsersComponent,
    EditUsersComponent,
    ItemGroupeCompetenceComponent,
    EditeReferentielsComponent,
    FiltrePipePipe,
    ServiceDetailPromisePipe,
    ItemCompetenceComponent,
    AddCompetenceComponent,
    EditCompetenceComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    NgMultiSelectDropDownModule,
    Ng2SearchPipeModule


  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptorInterceptor,
      multi: true,
    },
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
