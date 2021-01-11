import { Component, OnInit } from '@angular/core';
import {GroupeCompetenceService} from "../groupe-competence.service";

@Component({
  selector: 'app-list-groupe-competence',
  templateUrl: './list-groupe-competence.component.html',
  styleUrls: ['./list-groupe-competence.component.css']
})
export class ListGroupeCompetenceComponent implements OnInit {
tab = [1, 2, 3] ;
groupeCompetence: any = [];
competence: any = [];
  // @ts-ignore
  p: number;
  constructor(private servicesgrcp: GroupeCompetenceService) { }
 ngOnInit(): void {
    this.servicesgrcp.getAllGrpcompetence().subscribe(
      data => {
        this.groupeCompetence = data;
        this.competence = data;
      }, error => {
        console.log(error);
      }
    );
  }

}
