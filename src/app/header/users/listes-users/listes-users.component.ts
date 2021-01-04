import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-listes-users',
  templateUrl: './listes-users.component.html',
  styleUrls: ['./listes-users.component.css']
})
export class ListesUsersComponent implements OnInit {
  users: any = [];
  // @ts-ignore
  p: string | number;
  constructor(private  UsersServices: UsersService) { }

  ngOnInit(): void {
   this.UsersServices.getAllUsers().subscribe(
     data => {
       console.log(data);
       this.users = data;
     }
   );
  }

  // tslint:disable-next-line:typedef


}
