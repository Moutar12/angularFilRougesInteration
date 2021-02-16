import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {PromosComponent} from './header/promos/promos.component';
import {ProfilComponent} from './header/profil/profil.component';
import {ProfilDeSortieComponent} from './header/profil-de-sortie/profil-de-sortie.component';
import {GroupeDeCompetencesComponent} from './header/groupe-de-competences/groupe-de-competences.component';
import {CreateGroupeCompetenceComponent} from './header/groupe-de-competences/create-groupe-competence/create-groupe-competence.component';
import {ReferentielsComponent} from './header/referentiels/referentiels.component';
import {CreateReferentielComponent} from './header/referentiels/create-referentiel/create-referentiel.component';
import {CompetencesComponent} from './header/competences/competences.component';
import {UsersComponent} from './header/users/users.component';
import {DetailProfilComponent} from './header/profil/detail-profil/detail-profil.component';
import {EditeProfilComponent} from './header/profil/edite-profil/edite-profil.component';
import {DetailUsersComponent} from './header/users/detail-users/detail-users.component';
import {AddUserComponent} from './header/users/add-user/add-user.component';
import {EditUsersComponent} from "./header/users/listes-users/edit-users/edit-users.component";
import * as path from "path";
import {EditeGroupeCompetenceComponent} from "./header/groupe-de-competences/list-groupe-competence/edite-groupe-competence/edite-groupe-competence.component";
import {LoginGuard} from "./guard/login.guard";
import {ItemUsersComponent} from "./header/users/add-user/item-users/item-users.component";
import { ServiceDetailPromiseService } from './header/users/detail-users/service-detail-promise.service';
import {AddCompetenceComponent} from "./header/competences/add-competence/add-competence.component";

// @ts-ignore
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'head', component: HeaderComponent, children: [
          {path: 'promos', component: PromosComponent, canActivate: [LoginGuard]},




          {path: 'competence', component: CompetencesComponent,canActivate: [LoginGuard]},
      {path: 'addcompetence', component: AddCompetenceComponent, canActivate: [LoginGuard]},




          {path: 'sortie', component: ProfilDeSortieComponent, canActivate: [LoginGuard]},
          {path: 'reference', component: ReferentielsComponent, canActivate: [LoginGuard]},
       {path: 'addRef', component: CreateReferentielComponent, canActivate: [LoginGuard]},

      //Route de users
            {path: 'editUsers/:id', component: EditUsersComponent, canActivate: [LoginGuard]},
            {path: 'addUser', component: AddUserComponent, canActivate: [LoginGuard]},
            {path: 'userArchive', component: ItemUsersComponent, canActivate: [LoginGuard]},
            {path: 'utili', component: UsersComponent, canActivate: [LoginGuard], children: [
              {path: 'detailusers/:id', component: DetailUsersComponent, canActivate: [LoginGuard], resolve: {Users:ServiceDetailPromiseService}},

              ]},

      {path: 'profil', component: ProfilComponent,canActivate: [LoginGuard]},
      {path: 'edit/:id', component: EditeProfilComponent, canActivate: [LoginGuard]},
      {path: 'detail/:id', component: DetailProfilComponent, canActivate: [LoginGuard]},

              {path: 'grpcomp', component: GroupeDeCompetencesComponent, canActivate: [LoginGuard]},
              {path: 'editgroupecompetence/:id', component: EditeGroupeCompetenceComponent, canActivate: [LoginGuard]},
              {path: 'addgc', component: CreateGroupeCompetenceComponent, canActivate: [LoginGuard]},






        ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
