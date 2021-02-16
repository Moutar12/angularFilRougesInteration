import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {UsersService} from "../users.service";

// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class ServiceDetailPromiseService implements Resolve<UsersService>{

  constructor( private deteailService: UsersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UsersService> | Promise<UsersService> | UsersService {
    // @ts-ignore
    return this.deteailService.getDetail(route.params['id']);
  }

}
