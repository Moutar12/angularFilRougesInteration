import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  constructor(private http: HttpClient) { }

  getAllCompetence(){
    return this.http.get('http://127.0.0.1:8000/api/admin/competences?status=0');
  }

  addCompetence(form: any){
    return this.http.post('http://127.0.0.1:8000/api/admin/competences', form)
  }

  getNiveau(){
    return this.http.get("http://127.0.0.1:8000/api/admin/niveau")
  }

  deleteCompetence(id: number){
    return this.http.delete(`http://127.0.0.1:8000/api/admin/competences/${id}`)
  }
}
