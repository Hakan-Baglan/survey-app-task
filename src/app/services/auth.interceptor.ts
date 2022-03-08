import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/auth';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userStorage = localStorage.getItem('user');
    if (userStorage) {
      const token = (JSON.parse(userStorage)).token_val;
      const cloned = request.clone({
        headers: request.headers.set("Authorization",
          "Bearer " + token)
      });
      return next.handle(cloned);
    }
    else {
      return next.handle(request);
    }
  }

}
