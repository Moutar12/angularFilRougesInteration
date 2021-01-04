import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

// const TOKEN_HEADERS = 'Authorization';

@Injectable()
export class ServiceInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  // @ts-ignore
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    if (token){
        request = request.clone({headers: request.headers.set('Accept', 'application/json')});
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
