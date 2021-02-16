import {Component, Input, OnInit} from '@angular/core';
import {GroupeCompetenceService} from "../../groupe-competence.service";
import {ListGroupeCompetenceComponent} from "../list-groupe-competence.component";

@Component({
  selector: 'app-item-groupe-competence',
  templateUrl: './item-groupe-competence.component.html',
  styleUrls: ['./item-groupe-competence.component.css']
})
export class ItemGroupeCompetenceComponent implements OnInit {
  // @ts-ignore
  @Input() groupeCompetences: GroupeCompetenceComponent;
  // @ts-ignore
  p: number;
  constructor(private servicesgrcp: GroupeCompetenceService) { }

  ngOnInit(): void {
    //console.log(this.groupeCompetences)
  }

  deleteGroupecomp(){
    let conf = confirm('Etes vous sur de vouloir supprimé ?')
    if(conf)
    this.servicesgrcp.supGroupeCompetence(this.groupeCompetences.id).subscribe(
      ()=> {
        console.log('groupeCompetence supprimé')
      }
    )
  }
}
