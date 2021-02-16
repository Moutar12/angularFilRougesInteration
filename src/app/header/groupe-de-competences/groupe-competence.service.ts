import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GroupeCompetenceService {
  url = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
  constructor(private http: HttpClient) { }

  getAllGrpcompetence(){
    return this.http.get('http://127.0.0.1:8000/api/admin/grpecompetences')
  }

  addGroupeComp(form: any){

    // @ts-ignore
    return this.http.post('http://127.0.0.1:8000/api/admin/grpecompetences', form)
  }
  editGroupeCompetence(id: number, form: any){
    // @ts-ignore
    return this.http.put(`${this.url}/admin/grpecompetences/`+ id, form)
  }
  supGroupeCompetence(id: number){
    return this.http.delete(`${this.url}/admin/grpecompetences/` + id)
  }
}
