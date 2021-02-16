import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GroupeCompetenceService} from "../../groupe-competence.service";
import {CompetenceService} from "../../../competences/competence.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edite-groupe-competence',
  templateUrl: './edite-groupe-competence.component.html',
  styleUrls: ['./edite-groupe-competence.component.css']
})
export class EditeGroupeCompetenceComponent implements OnInit {
  // @ts-ignore
  @Input() groupeCompetences: groupeCompetence;
  dropdownList: any;
  selectedItems = [];
  // @ts-ignore
  dropdownSettings: {};
  // @ts-ignore
  editgroupeCptenceForm: FormGroup;
  competence: any = [];
  groupeCopetence: any = {}

  constructor(private Service: GroupeCompetenceService, private serviceCompetence: CompetenceService,
            private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.serviceCompetence.getAllCompetence().subscribe(
      data => {

        this.competence = data;

      }
    );
    this.editgroupeCptenceForm = new FormGroup({
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
      textField: 'libelle',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true
    };
  }

  onSubmit(){
    const formValue = this.editgroupeCptenceForm.value;
    const id = this.route.snapshot.params.id;
    // this.groupeCopetence.libelle;
    // this.groupeCopetence.description;
    // this.groupeCopetence.competence;

    // @ts-ignore
    this.Service.editGroupeCompetence(this.groupeCompetences, id, formValue).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

}
