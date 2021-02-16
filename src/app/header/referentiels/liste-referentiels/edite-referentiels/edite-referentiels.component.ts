import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReferentielsService} from "../../referentiels.service";
import {GroupeCompetenceService} from "../../../groupe-de-competences/groupe-competence.service";

@Component({
  selector: 'app-edite-referentiels',
  templateUrl: './edite-referentiels.component.html',
  styleUrls: ['./edite-referentiels.component.css']
})
export class EditeReferentielsComponent implements OnInit {
  dropdownList: any;
  selectedItems = [];
  // @ts-ignore
  dropdownSettings: {};

  // @ts-ignore
  referentiel: FormGroup;
  constructor(private refService: ReferentielsService, private groupeComptenceService: GroupeCompetenceService) { }

  ngOnInit(): void {
    this.groupeComptenceService.getAllGrpcompetence().subscribe(
      data => {
        this.dropdownList = data;
      }
    )
    this.referentiel = new FormGroup(
      {
        'libelle': new FormControl(null),
        'presentation': new FormControl(null),
        'groupeCompetence': new FormControl([]),
        'description': new FormControl(null),
        'programme': new FormControl(null),
        'critereEvaluation': new FormControl(null, Validators.required),
        'critereAdmission': new FormControl(null, Validators.required)
      }
    );

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'libelle',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true
    }
  }

}
