import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { App } from 'src/app/shared/app.enum';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http: HttpClient) { }


  get(): Observable<any> {
    return this._http.get<any>(App.apiUrl + App.posts);
  }

}
