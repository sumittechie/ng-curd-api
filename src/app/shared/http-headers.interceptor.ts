import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserInfo } from '../models/i-user-info';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const userInfo: IUserInfo = JSON.parse(localStorage.getItem('user-info'));
    if (userInfo) {
      const token = `${userInfo.user}:${userInfo.password}`;
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + btoa(token)
        }
      });
    }

    return next.handle(request);
  }
}