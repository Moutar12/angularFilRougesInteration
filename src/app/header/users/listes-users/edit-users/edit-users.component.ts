import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../users.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  // @ts-ignore
  @Input() users: users;
  // @ts-ignore
  id: number;
// @ts-ignore
  UsresForms: FormGroup;
  // @ts-ignore
  Users: any = {};
  // @ts-ignore
  userid: any = [];
  // @ts-ignore

  imgsrc: string = '/assets/img';
  selectFile: any = null;
  constructor(private user: UsersService, private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

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
    this.id = this.route.snapshot.params.id;
    //console.log(this.id);
    this.user.getDetail(this.id).subscribe(
      data => {
        // @ts-ignore
        this.userid =data;
        console.log(this.userid);
      }
    )

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
    const formValue = this.UsresForms.value;

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
    // @ts-ignore
    this.user.updateUsers(this.id,formData, formValue,{headers: new HttpHeaders, responseType: 'blob'}).subscribe(
      data => {
        this.router.navigate(['/head/utili'])

      }
    )
    console.log(this.UsresForms);
  }


}
