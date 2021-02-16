import { Component, OnInit } from '@angular/core';
import { CompetenceService } from '../competence.service';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.css']
})
export class AddCompetenceComponent implements OnInit {
  // @ts-ignore
  competenceForm: FormGroup;
  dropdownList: any;
  selectedItems = [];
  // @ts-ignore
  dropdownSettings: {};

  niveau: any = [];

  constructor(private serviceCompetence: CompetenceService) { }

  ngOnInit(): void {
    this.serviceCompetence.getNiveau().subscribe(
      data => {
        this.niveau = data;
      }
    );
    this.competenceForm = new FormGroup({
      'libelle': new FormControl(null),
      'description': new FormControl(null),
      'niveau': new FormControl([])
    })

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'libelle',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true
    };
  }

  onSubmit(){
    const formValue = this.competenceForm.value;
    this.serviceCompetence.addCompetence(formValue).subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
