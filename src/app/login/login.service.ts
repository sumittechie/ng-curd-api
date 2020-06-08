import { Injectable } from '@angular/core';
import { IUserInfo } from '../models/i-user-info';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _router: Router) { }

  login(params: IUserInfo) {
    if (params) {
      localStorage.setItem('user-info', JSON.stringify(params));
      this._router.navigate(['']);
    }
  }

  logout(): void {
    localStorage.removeItem('user-info');
    this._router.navigate(['/login']);
  }

}
