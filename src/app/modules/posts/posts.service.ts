import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { App } from 'src/app/shared/app.enum';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http: HttpClient) { }

  private postsUrl = App.apiUrl + App.posts;

  get(): Observable<any> {
    return this._http.get<any>(this.postsUrl);
  }

  getById(postId: number): Observable<any> {
    return this._http.get<any>(`${this.postsUrl}/${postId}`);
  }

  getPostComments(postId: number): Observable<any> {
    return this._http.get<any>(`${this.postsUrl}/${postId}/comments`);
  }

}
