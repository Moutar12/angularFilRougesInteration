import { Component, OnInit } from '@angular/core';
import {ServicesProfilService} from '../services-profil.service';

@Component({
  selector: 'app-listes-profil',
  templateUrl: './listes-profil.component.html',
  styleUrls: ['./listes-profil.component.css']
})
export class ListesProfilComponent implements OnInit {

  profils: any = [];
  // @ts-ignore
  // @ts-ignore
  l: number;
  constructor(private services: ServicesProfilService) { }

  ngOnInit(): void {
    console.log(this.profils) ;
    this.services.getAllProfils().subscribe(
      data => {
        this.profils = data;
      }
    );
  }
  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  onDeleted(id: number){
    // @ts-ignore
    this.services.deleteProfil(id).subscribe(
    data => {
      console.log(id);
    }
    );
  }

}
