import { Component, OnInit } from '@angular/core';
import { ServiceLoginService } from '../login/service-login.service';
import {Router} from "@angular/router";
import {UsersService} from "./users/users.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any = [];

  constructor(private loginService: ServiceLoginService, private router: Router, private usersService: UsersService) { }

  ngOnInit(): void {
    const id = localStorage.getItem('id');
    //console.log(id)
    // @ts-ignore
    this.usersService.getDetail(id).subscribe(
      data =>{
        // @ts-ignore
        this.user = data;
        //console.log(data)
      }
    )

  }
logout(){
    this.loginService.logout();
    this.router.navigate(['login']).then(() => {
    window.location.reload();
  });
}

}
