import {Component, Input, OnInit} from '@angular/core';
import {CompetenceService} from "../../competence.service";

@Component({
  selector: 'app-item-competence',
  templateUrl: './item-competence.component.html',
  styleUrls: ['./item-competence.component.css']
})
export class ItemCompetenceComponent implements OnInit {
// @ts-ignore
  @Input()  competences: competences;
  constructor(private serviceComp: CompetenceService) { }

  ngOnInit(): void {
    //console.log(this.competences)
  }

  deleteCompetence(){
    const conf = confirm('Etes vous sur de vouloir supprimer');
    if (conf)
    this.serviceComp.deleteCompetence(this.competences.id).subscribe(
      () => {
        window.location.reload();
      }
    );

  }
}
