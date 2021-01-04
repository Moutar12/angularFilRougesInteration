import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail-users',
  templateUrl: './detail-users.component.html',
  styleUrls: ['./detail-users.component.css']
})
export class DetailUsersComponent implements OnInit {

  constructor(private UsersServices: UsersService, private route: ActivatedRoute) { }
  Users: any = {};
  ngOnInit(): void {
    // @ts-ignore
    this.getUsersId();
  }
  // tslint:disable-next-line:typedef
  getUsersId(){
    const id = +this.route.snapshot.params.id;
    console.log(id);
    this.UsersServices.getDetail(id).subscribe(
      data => {
        this.Users = data;
        console.log(this.Users);
        console.log(data);
      }
    );
  }
}
