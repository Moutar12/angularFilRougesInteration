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
    return this.http.get(' http://127.0.0.1:8000/api/admin/profils?archive=1');
  }
  detailProfil(id: number){
    return this.http.get(`${this.url}/admin/profils/${id}/users`)
  }

  // tslint:disable-next-line:typedef
  modifiProfil(id: number, libelle: any){
    // @ts-ignore
    return this.http.put( `http://127.0.0.1:8000/api/admin/profils/${id}`, libelle);

  }

  profilDetail(id: number){
    return this.http.get(`${this.url}/admin/profils/` + id)
  }

  // tslint:disable-next-line:typedef
  deleteProfil(id: number){
    return this.http.delete('http://127.0.0.1:8000/api/admin/profils/' + `${id}`);
  }
}
