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

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'head', component: HeaderComponent, children: [
          {path: 'promos', component: PromosComponent},
          {path: 'competence', component: CompetencesComponent},
          {path: 'sortie', component: ProfilDeSortieComponent},
          {path: 'reference', component: ReferentielsComponent, children: [
            {path: 'addREf', component: CreateReferentielComponent}
            ]},
            {path: 'addUser', component: AddUserComponent},
            {path: 'utili', component: UsersComponent, children: [
                {path: 'detailusers/:id', component: DetailUsersComponent}
              ]},


              {path: 'grpcomp', component: GroupeDeCompetencesComponent, children: [
              {path: 'addgc', component: CreateGroupeCompetenceComponent},
            ]},



      {path: 'profil', component: ProfilComponent, children: [
          {path: 'detail', component: DetailProfilComponent},
          {path: 'edit/:id', component: EditeProfilComponent}
        ]},

        ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
