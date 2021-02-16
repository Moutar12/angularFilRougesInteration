import { Component, OnInit } from '@angular/core';
import {ServicesProfilService} from '../services-profil.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

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
 // libelle: string;
  profil: any = [];
  showMsg: boolean = false;

  constructor(private services: ServicesProfilService, private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.Form = new FormGroup(
      {
        'libelle': new FormControl(null)
      }
    );
    this.id = this.route.snapshot.params.id;
    this.services.profilDetail(this.id).subscribe(
      data => {
        // @ts-ignore
        this.profil =data;
        console.log(this.profil);
      }
    )
  }
  // tslint:disable-next-line:typedef
  editProfil(){
    const formvalue = this.Form.value
    // @ts-ignore
    this.id = +this.route.snapshot.params.id;
    // @ts-ignore
    this.services.modifiProfil(this.id, formvalue).subscribe(
        data => {
          this.showMsg = true;
          this.Form.reset({});
          this.router.navigate(['/head/profil'])
      }
    );
  }
}
