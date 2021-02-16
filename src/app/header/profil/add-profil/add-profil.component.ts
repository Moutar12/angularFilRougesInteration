import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ServicesProfilService} from '../services-profil.service';
import {Router} from "@angular/router";

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
  showMsg: boolean = false;
  constructor(private formBuilder: FormBuilder, private serviceProfil: ServicesProfilService,private router: Router) { }

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

        // @ts-ignore
        this.showMsg = true;
        this.formGroup.reset({});
        window.location.reload();

        console.log(data);
      }
    );




  }

}
