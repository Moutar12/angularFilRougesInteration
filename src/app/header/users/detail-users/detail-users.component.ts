import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {ActivatedRoute, Data} from "@angular/router";

@Component({
  selector: 'app-detail-users',
  templateUrl: './detail-users.component.html',
  styleUrls: ['./detail-users.component.css']
})
export class DetailUsersComponent implements OnInit {

  constructor(private UsersServices: UsersService, private route: ActivatedRoute) { }
  Users: any = [];
  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.Users = data['Users']
      }
    );
    // @ts-ignore
    // const id = +this.route.snapshot.params.id;
    // console.log(id);
    // this.UsersServices.getDetail(id).subscribe(
    //   data => {
    //     this.Users = data;
    //     console.log(this.Users);
    //     console.log(data);
    //   }
    // );
  }

}
