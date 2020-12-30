import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    if (token){
      const cloneReq = request.clone(
        {
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      return next.handle(cloneReq);
    }else{
      return next.handle(request);
    }
  }

}
export const InterceptorToken = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoginInterceptorInterceptor,
  multi: true
};
