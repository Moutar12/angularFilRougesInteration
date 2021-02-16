import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = environment.baseUrl;
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAllUsers(){
    return this.http.get('http://127.0.0.1:8000/api/admin/users?statut=1');
  }
  getUsers(){
    return this.http.get('http://127.0.0.1:8000/api/admin/users?statut=0');
  }

  // tslint:disable-next-line:typedef
  getDetail(id: number){
    return this.http.get(`http://127.0.0.1:8000/api/admin/users/${id}` );
  }
  postUsers(formData = new FormData()){
    return  this.http.post('http://127.0.0.1:8000/api/admin/users', formData)
  }

  updateUsers(id: number, users: any){
    // @ts-ignore
    return this.http.put(`http://127.0.0.1:8000/api/admin/users/${id}`, users);
  }
  deleteUsers(id: number){
    return this.http.delete(`${this.url}/admin/users/` + id);
  }
}
