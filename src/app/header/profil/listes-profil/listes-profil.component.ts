import { Component, OnInit } from '@angular/core';
import {ServicesProfilService} from '../services-profil.service';
import {element} from "protractor";
import {ActivatedRoute, Router} from "@angular/router";

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
  // @ts-ignore
  isLoader: boolean;
  constructor(private services: ServicesProfilService, private  router: Router) { }

  ngOnInit(): void {
   this.listAllProfils();
  }
  // tslint:disable-next-line:typedef
  listAllProfils(){
    this.isLoader = false;
    this.services.getAllProfils().subscribe(
      data => {
        this.profils = data;
        // tslint:disable-next-line:no-shadowed-variable
        this.profils.forEach( (element: { [x: string]: boolean; }) => {
          element.isEdit = false;
        });
        this.isLoader = false;
      }, error => {
        this.isLoader = false;
      }
    );
  }

  // tslint:disable-next-line:typedef
  onDeleted(id: number){
    let conf = confirm('Etes vous sur de vouloir supprimer?')
    if (conf)
    this.services.deleteProfil(id).subscribe(
    data => {
      this.router.navigate(['/head/profil']).then(() => {
        window.location.reload();
      });
    }
    );
  }

}
