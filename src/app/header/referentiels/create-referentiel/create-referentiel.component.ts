import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReferentielsService} from "../referentiels.service";
import {GroupeCompetenceService} from "../../groupe-de-competences/groupe-competence.service";

@Component({
  selector: 'app-create-referentiel',
  templateUrl: './create-referentiel.component.html',
  styleUrls: ['./create-referentiel.component.css']
})
export class CreateReferentielComponent implements OnInit {

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

  ajoutReferentiel(){
    const formRefValue = this.referentiel.value;
    console.log(formRefValue);
    // this.refService.addReferentiel(formRefValue).subscribe(
    //   data => {
    //     console.log(formRefValue);
    //   }
    // )
  }
}
