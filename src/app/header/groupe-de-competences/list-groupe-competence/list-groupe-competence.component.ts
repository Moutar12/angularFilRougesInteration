import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-groupe-competence',
  templateUrl: './list-groupe-competence.component.html',
  styleUrls: ['./list-groupe-competence.component.css']
})
export class ListGroupeCompetenceComponent implements OnInit {
tab = [1, 2, 3] ;
  constructor() { }
 ngOnInit(): void {
  }

}
