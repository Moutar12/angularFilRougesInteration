import { Component, OnInit } from '@angular/core';
import {ReferentielsService} from "../referentiels.service";

@Component({
  selector: 'app-liste-referentiels',
  templateUrl: './liste-referentiels.component.html',
  styleUrls: ['./liste-referentiels.component.css']
})
export class ListeReferentielsComponent implements OnInit {
  referentiel: any = [];
  // @ts-ignore
  p: string | number ;

  constructor(private refrentielService: ReferentielsService) { }

  ngOnInit(): void {
    this.refrentielService.getAllReferentiel().subscribe(
      data => {
        console.log(data);
        this.referentiel = data;
      }
    )
  }

}
