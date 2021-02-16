import { Component, OnInit } from '@angular/core';
import {FormArrayName, FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../users.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {MustMatch} from "./MustMatch";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
// @ts-ignore
  UsresForms: FormGroup;
  // @ts-ignore
  Users: any = {};
  // @ts-ignore
  selectFile: any = null;
  imgsrc: string = '/assets/img';
  showMsg: boolean = false;

  constructor(private users: UsersService, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    this.UsresForms = new FormGroup({
     'prenom': new FormControl(null,
       [
         Validators.required,
       Validators.maxLength(5),
       Validators.minLength(10)
     ]),
      'nom': new FormControl(null,[
        Validators.required,
        Validators.maxLength(5),
        Validators.maxLength(10)
      ]),
      'email': new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(5)
      ]),
      'username': new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(5)
      ]),
      'telephone': new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(5)
      ]),
      'type': new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(5)
      ]),
      'adresse': new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(5)
      ]),
      'password': new FormControl(null,
        [
        Validators.required,
        Validators.maxLength(3),
        Validators.minLength(6)
      ]),
      'pwdcf': new FormControl(null, [
        Validators.required,
        Validators.maxLength(3),
        Validators.maxLength(6)
      ]),
      'profil': new FormControl(null),
     'photo': new FormControl(null),
    });
  }
  // @ts-ignore
  UploadFile(event: any){
    if (event.target.files && event.target.files[0]){
      const reader = new FileReader();
      reader.onload = (e:any) => this.imgsrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectFile = event.target.files[0];
    }else
    {
      this.imgsrc = '/assets/img';
      this.selectFile = null;
    }
  }
  onSubmit(){
     const formData: any = new FormData();
   //  // @ts-ignore
   formData.append('photo', this.selectFile, this.selectFile.name);
    formData.append('username', this.UsresForms.value.username);
    formData.append('prenom', this.UsresForms.value.prenom);
    formData.append('nom', this.UsresForms.value.nom);
    formData.append('adresse', this.UsresForms.value.adresse);
    formData.append('telephone', this.UsresForms.value.telephone);
    formData.append('email', this.UsresForms.value.email);
    formData.append('type', this.UsresForms.value.type);
    formData.append('password', this.UsresForms.value.password);
   //formData.append("avatar", this.UsresForms.get('avatar')?.value);

   // @ts-ignore
    this.users.postUsers(formData, this.UsresForms.value).subscribe(
     data => {
       this.showMsg = true;
       this.UsresForms.reset({});
       this.router.navigate(['/head/utili'])
     }
   )
  }

}
