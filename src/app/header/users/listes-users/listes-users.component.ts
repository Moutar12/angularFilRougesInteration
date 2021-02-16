import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-listes-users',
  templateUrl: './listes-users.component.html',
  styleUrls: ['./listes-users.component.css']
})
export class ListesUsersComponent implements OnInit {
  users: any = [];
  // @ts-ignore
  searchText = '';
  // @ts-ignore
  p: string | number;
  // @ts-ignore
  id: number;
  constructor(private  UsersServices: UsersService,private router: Router) { }

  ngOnInit(): void {
   this.UsersServices.getAllUsers().subscribe(
     data => {
       console.log(data);
       this.users = data;
     }
   );
  }

  deleteUsers(id: number){
    let conf = confirm('Etes vous sur de vouloir supprimé ?')
    if(conf)
      this.UsersServices.deleteUsers(id).subscribe(
        ()=> {
          console.log('groupeCompetence supprimé')
        })
    this.router.navigate(['/head/utili']).then(() => {
      window.location.reload();
    })
  }


}
