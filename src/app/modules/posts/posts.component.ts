import { Component, OnInit, ViewChild } from '@angular/core';
import { PostsService } from './posts.service';
import { take } from 'rxjs/operators';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: any[];
  isLoading: boolean = false;

  @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor(private _service: PostsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    
    this._service.get().pipe(take(1)).subscribe(posts => {
      this.posts = posts;
      this.isLoading = false;
    });
  }

}
