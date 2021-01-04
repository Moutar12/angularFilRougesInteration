import { Component, OnInit } from '@angular/core';
import {ServicesProfilService} from '../services-profil.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edite-profil',
  templateUrl: './edite-profil.component.html',
  styleUrls: ['./edite-profil.component.css']
})
export class EditeProfilComponent implements OnInit {
  // @ts-ignore
  Form: FormGroup;
  // @ts-ignore
  id: number;
  // @ts-ignore
  libelle: string;
  constructor(private services: ServicesProfilService, private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id;
    this.Form = this.formBuilder.group(
      {
        libelle: ['', Validators.required]
      }
    );
  }
  // tslint:disable-next-line:typedef
  editProfil(){
    // @ts-ignore
    const id = +this.route.snapshot.params.id;
    this.services.modifiProfil(this.libelle, id).subscribe(
        data => {
          console.log(data);
      }
    );
  }
}
