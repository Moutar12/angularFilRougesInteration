import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HeaderComponent} from './header/header.component';
import {PromosComponent} from './header/promos/promos.component';
import {EditeComponent} from './header/edite/edite.component';
import {ProfilComponent} from './header/profil/profil.component';
import {ProfilDeSortieComponent} from './header/profil-de-sortie/profil-de-sortie.component';
import {GroupeDeCompetencesComponent} from './header/groupe-de-competences/groupe-de-competences.component';
import {CreateGroupeCompetenceComponent} from './header/groupe-de-competences/create-groupe-competence/create-groupe-competence.component';
import {ReferentielsComponent} from './header/referentiels/referentiels.component';
import {CreateReferentielComponent} from './header/referentiels/create-referentiel/create-referentiel.component';
import {CompetencesComponent} from './header/competences/competences.component';
import {UsersComponent} from './header/users/users.component';

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
            {path: 'utili', component: UsersComponent},


          {path: 'grpcomp', component: GroupeDeCompetencesComponent, children: [
              {path: 'addgc', component: CreateGroupeCompetenceComponent},
            ]},

          {path: ':edit', component: EditeComponent},

      {path: 'profil', component: ProfilComponent},

        ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
