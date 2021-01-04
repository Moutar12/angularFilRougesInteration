import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ServicesProfilService} from '../services-profil.service';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.css']
})
export class AddProfilComponent implements OnInit {
  // @ts-ignore
  formGroup: FormGroup;
  // @ts-ignore
  libelle: string;
  profil: any = {};
  constructor(private formBuilder: FormBuilder, private serviceProfil: ServicesProfilService) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      {
        libelle: ['', Validators.required]
      }
    );
  }
  // tslint:disable-next-line:typedef
  ajoutProfil() {
    this.serviceProfil.addProfil(this.profil).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
