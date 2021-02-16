import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {GroupeCompetenceService} from "../groupe-competence.service";
import {CompetenceService} from "../../competences/competence.service";
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {logger} from "codelyzer/util/logger";

@Component({
  selector: 'app-create-groupe-competence',
  templateUrl: './create-groupe-competence.component.html',
  styleUrls: ['./create-groupe-competence.component.css']
})
export class CreateGroupeCompetenceComponent implements OnInit {
  dropdownList: any;
  selectedItems = [];
  // @ts-ignore
  dropdownSettings: {};
  // @ts-ignore
  groupeCptenceForm: FormGroup;
  competence: any = [];
  groupeCopetence: any = {}
  constructor(private Service: GroupeCompetenceService, private serviceCompetence: CompetenceService) { }

  ngOnInit(): void {
    this.serviceCompetence.getAllCompetence().subscribe(
      data => {
        console.log(data);
        this.dropdownList = data;

      }
    );
    this.groupeCptenceForm = new FormGroup({
      'libelle': new FormControl(null, [
        Validators.required
      ]),
      'description': new FormControl(null, [
        Validators.required
      ]),
      'competence': new FormControl([])
    });

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'competence',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true
    };
  }

  onSubmit(){
    const formValue = this.groupeCptenceForm.value;

    this.groupeCopetence.libelle;
    this.groupeCopetence.description;
    this.groupeCopetence.competence;

    this.Service.addGroupeComp(formValue).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
    console.log(formValue);
  }


}
