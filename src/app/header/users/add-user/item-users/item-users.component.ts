import { Component, OnInit } from '@angular/core';
import {UsersService} from "../../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-users',
  templateUrl: './item-users.component.html',
  styleUrls: ['./item-users.component.css']
})
export class ItemUsersComponent implements OnInit {
  users: any = [];
  // @ts-ignore
  p: string | number;
  searchText = '';
  constructor(private  UsersServices: UsersService,private router: Router) { }

  ngOnInit(): void {
    this.UsersServices.getUsers().subscribe(
      data => {
        console.log(data);
        this.users = data;
      }
    );
  }

}
