import { Component, OnInit, OnDestroy } from "@angular/core";
import { LoginService } from "../login/login.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(
    private _loginService: LoginService,
  ) { }

  ngOnInit(): void {

  }

  onLogout(): void {
    this._loginService.logout();
  }

  ngOnDestroy(): void {

  }
}
