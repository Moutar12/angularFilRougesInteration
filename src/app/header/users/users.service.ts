import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAllUsers(){
    return this.http.get('http://127.0.0.1:8000/api/admin/users');
  }

  // tslint:disable-next-line:typedef
  getDetail(id: number){
    return this.http.get(`http://127.0.0.1:8000/api/admin/users/${id}` );
  }

  // postUsers(formData: any){
  //   // @ts-ignore
  //   return this.http.post('http://127.0.0.1:8000/api/admin/users');
  // }

}
