import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import { Observable } from 'rxjs';
import {ServicesProfilService} from "../services-profil.service";


@Injectable({
  providedIn: 'root'
})
export class EditeProfilService implements Resolve<any>{

  constructor(private service: ServicesProfilService) { }

  // @ts-ignore
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<profil> | Promise<profil> | profil {
    // @ts-ignore
    return this.service.modifiProfil(+route.params['id']);
  }
}
