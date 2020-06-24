import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor(private _service: CommentsService) { }

  ngOnInit(): void {
    this._service.get().pipe(take(1)).subscribe(comments => console.log(comments));
  }

}
