import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReferentielsService {
  url = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getAllReferentiel(){
    return this.http.get('http://127.0.0.1:8000/api/admin/referenciels')
  }
  addReferentiel(refentiel: any){
    // @ts-ignore
    return this.http.post('http://127.0.0.1:8000/api/admin/referentiels', refentiel )
  }
  deleteRferentiel(id: number){
    return this.http.delete(`${this.url}/admin/referentiels/` + id)
  }
}
