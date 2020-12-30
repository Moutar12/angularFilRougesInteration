import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class ServiceLoginService {

  constructor(private httpClient: HttpClient, private router: Router) { }
  baseUrl = environment.baseUrl;
  helper = new  JwtHelperService();
  // @ts-ignore
  decode: string;

  // tslint:disable-next-line:typedef
  login(username: string, password: string){
    return this.httpClient.post(this.baseUrl + '/login', {
      username, password
    }).pipe(
      map((response: any) => {
        const decode = this.helper.decodeToken(response.token);
        // @ts-ignore
        localStorage.setItem('token', response.token);
        console.log(decode.roles);
        // tslint:disable-next-line:triple-equals
        if (decode.roles[0] === 'ROLE_ADMIN'){
          this.router.navigate(['/head']);
        }
      })
    );
  }

}
