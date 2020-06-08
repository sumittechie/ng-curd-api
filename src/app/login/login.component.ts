import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { IUserInfo } from '../models/i-user-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _fb: FormBuilder, private _service: LoginService) { }

  private initForm(): void {
    this.loginForm = this._fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    this.initForm();
  }


  onLogin() {
    const userInfo: IUserInfo = {
      user: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    };

    this._service.login(userInfo);

  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
