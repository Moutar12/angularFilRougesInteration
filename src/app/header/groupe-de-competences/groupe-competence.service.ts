import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GroupeCompetenceService {

  constructor(private http: HttpClient) { }

  getAllGrpcompetence(){
    return this.http.get('http://127.0.0.1:8000/api/admin/grpecompetences')
  }

  addGroupeComp(competence: any){
    // @ts-ignore
    return this.http.post('http://127.0.0.1:8000/api/admin/grpecompetences')
  }
}
