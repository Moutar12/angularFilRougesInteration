import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import {HttpClientModule} from '@angular/common/http';
import {InterceptorToken} from './login-interceptor.interceptor';
import { PromosComponent } from './header/promos/promos.component';
import { ReferentielsComponent } from './header/referentiels/referentiels.component';
import { GroupeDeCompetencesComponent } from './header/groupe-de-competences/groupe-de-competences.component';
import { CompetencesComponent } from './header/competences/competences.component';
import { GroupesTagsComponent } from './header/groupes-tags/groupes-tags.component';
import { ProfilDeSortieComponent } from './header/profil-de-sortie/profil-de-sortie.component';
import { ProfilComponent } from './header/profil/profil.component';
import { EditeComponent } from './header/edite/edite.component';
import { CreateReferentielComponent } from './header/referentiels/create-referentiel/create-referentiel.component';
import { ListGroupeCompetenceComponent } from './header/groupe-de-competences/list-groupe-competence/list-groupe-competence.component';
import { ItemGroupeCompetenceComponent } from './header/groupe-de-competences/list-groupe-competence/item-groupe-competence/item-groupe-competence.component';
import { EditeGroupeCompetenceComponent } from './header/groupe-de-competences/edite-groupe-competence/edite-groupe-competence.component';
import { ListeReferentielsComponent } from './header/referentiels/liste-referentiels/liste-referentiels.component';
import { ItemReferentilComponent } from './header/referentiels/liste-referentiels/item-referentil/item-referentil.component';
import { ListeCompetenceComponent } from './header/competences/liste-competence/liste-competence.component';
import { ItemCompetenceComponent } from './header/competences/liste-competence/item-competence/item-competence.component';
import { UsersComponent } from './header/users/users.component';
import { ListesUsersComponent } from './header/users/listes-users/listes-users.component';
import { ItemUsersComponent } from './header/users/listes-users/item-users/item-users.component';
import { AddUserComponent } from './header/users/add-user/add-user.component';


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
    EditeComponent,
    CreateReferentielComponent,
    ListGroupeCompetenceComponent,
    ItemGroupeCompetenceComponent,
    EditeGroupeCompetenceComponent,
    ListeReferentielsComponent,
    ItemReferentilComponent,
    ListeCompetenceComponent,
    ItemCompetenceComponent,
    UsersComponent,
    ListesUsersComponent,
    ItemUsersComponent,
    AddUserComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule

    ],
  providers: [
    InterceptorToken
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
