import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesProfilService {
  // @ts-ignore
  id: number;


  url = environment.baseUrl;
  constructor(private http: HttpClient) { }


  // tslint:disable-next-line:typedef
  addProfil(libelle: string){
    // @ts-ignore
    return this.http.post('http://127.0.0.1:8000/api/admin/profils', libelle);
  }
  // tslint:disable-next-line:typedef
  getAllProfils(){
    return this.http.get(' http://127.0.0.1:8000/api/admin/profils');
  }

  // tslint:disable-next-line:typedef
  modifiProfil(libelle: string, id: number){
    // @ts-ignore
    return this.http.put( `${this.url}/admin/profils/` + id, {libelle});

  }

  // tslint:disable-next-line:typedef
  deleteProfil(id: number){
    return this.http.delete('http://127.0.0.1:8000/api/admin/profils/' + `${id}`);
  }
}
