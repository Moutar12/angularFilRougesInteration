import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ServiceLoginService} from './service-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // @ts-ignore
  loginForm: FormGroup = FormGroup;
  // @ts-ignore
  username: string;
  // @ts-ignore
  password: string;
  submited = false;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private FormBuilder: FormBuilder, private loginService: ServiceLoginService ) { }

  // @ts-ignore
  // @ts-ignore
  // @ts-ignore
  ngOnInit(): void {
    // @ts-ignore
    this.loginForm = this.FormBuilder.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
  }
    );
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
    this.submited = true;
    if (this.loginForm.invalid){
      return;
    }
    console.log('cool');
    console.log('cool');
    this.loginService.login(this.username, this.password).subscribe(
      data => {
        return;
      }, error => {
        console.log(error); }
    );
  }
}
