import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {GroupeCompetenceService} from "../groupe-competence.service";

@Component({
  selector: 'app-create-groupe-competence',
  templateUrl: './create-groupe-competence.component.html',
  styleUrls: ['./create-groupe-competence.component.css']
})
export class CreateGroupeCompetenceComponent implements OnInit {

  // @ts-ignore
  groupeCptenceForm: FormGroup;
  competence: any = {};

  constructor(private Service: GroupeCompetenceService) { }

  ngOnInit(): void {
    this.groupeCptenceForm = new FormGroup({
      'libelle': new FormControl(null),
      'description': new FormControl(null),
      'competence': new FormControl([])
    });

  }

  onSubmit(){
    this.Service.addGroupeComp(this.competence).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
    console.log(this.groupeCptenceForm);
  }

}
