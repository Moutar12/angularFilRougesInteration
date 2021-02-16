import { Component, OnInit } from '@angular/core';
import {CompetenceService} from "../competence.service";

@Component({
  selector: 'app-liste-competence',
  templateUrl: './liste-competence.component.html',
  styleUrls: ['./liste-competence.component.css']
})
export class ListeCompetenceComponent implements OnInit {
  competence: any = [];
  // @ts-ignore
  p: string | number;
  constructor(private Service: CompetenceService) { }

  ngOnInit(): void {
    this.Service.getAllCompetence().subscribe(
      data => {
        console.log(data);
        this.competence = data;
      }, error => {
        console.log(error);
      }
    );
  }

}
