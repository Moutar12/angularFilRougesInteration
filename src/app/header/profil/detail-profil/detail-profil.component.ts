import { Component, OnInit } from '@angular/core';
import {ServicesProfilService} from "../services-profil.service";
import {ActivatedRoute} from "@angular/router";
import {dashCaseToCamelCase} from "@angular/compiler/src/util";

@Component({
  selector: 'app-detail-profil',
  templateUrl: './detail-profil.component.html',
  styleUrls: ['./detail-profil.component.css']
})
export class DetailProfilComponent implements OnInit {
  // @ts-ignore
  id: number;
  profil: any =[];
  constructor(private serviceProfil: ServicesProfilService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
    this.serviceProfil.detailProfil(this.id).subscribe(
      data => {
        // @ts-ignore
        this.profil = data;
        console.log(this.profil);
      }
    )
  }

}
