import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../users.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
// @ts-ignore
  UsresForms: FormGroup;
  // @ts-ignore
  Users: any = {};
  // @ts-ignore
  selectFile: File = null;
  constructor(private users: UsersService, private http: HttpClient) { }

  ngOnInit(): void {
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
      // 'pwdcf': new FormControl(null, [
      //   Validators.required,
      //   Validators.maxLength(3),
      //   Validators.maxLength(6)
      // ]),
      'profil': new FormControl(null),
      'photo': new FormControl([]),
    });
  }
  // @ts-ignore
  UploadFile(event){
    // @ts-ignore
    // const file = (event.target as HTMLInputElement).files[0];
    // this.UsresForms.patchValue({
    //   avatar: file
    // });
    // @ts-ignore
    //const control = new FormControl(null, Validators.required);
    // @ts-ignore
    // (<FormArrayName>this.UsresForms.get('photo')).control;
    // if (event.target.files.length > 0){
    //   const files = event.target.files[0];
    //   // @ts-ignore
    //   this.UsresForms.get('file').setValue(files)
    // }
    this.selectFile = <File>event.target.files[0];
  }
  onSubmit(){
    const formData: any = new FormData();
    // @ts-ignore
    formData.append('photo', this.selectFile, this.selectFile.name);
    formData.append('username', this.UsresForms.value.username);
    formData.append('prenom', this.UsresForms.value.prenom);
    formData.append('nom', this.UsresForms.value.nom);
    formData.append('adresse', this.UsresForms.value.adresse);
    formData.append('telephone', this.UsresForms.value.telephone);
    formData.append('email', this.UsresForms.value.email);
    formData.append('type', this.UsresForms.value.type);
    formData.append('password', this.UsresForms.value.password);
    // formData.append("avatar", this.UsresForms.get('avatar')?.value);

    // this.users.postUsers(formData).subscribe(
    //   data => {
    //     console.log(data);
    //   }, error => {
    //     console.log(error);
    //   }
    // );
    // @ts-ignore
    this.http.post('http://127.0.0.1:8000/api/admin/users', formData).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
    console.log(this.UsresForms);
  }


}
