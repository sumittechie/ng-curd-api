import { Subject } from "rxjs";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostsService } from "../posts.service";
import { takeUntil, switchMap } from "rxjs/operators";
import { isNullOrUndefined } from "util";

@Component({
  selector: "posts-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.scss"],
})
export class ViewComponent implements OnInit, OnDestroy {
  subscripts$ = new Subject();
  post: any = null;
  comments: any[] = [];
  isLoading: boolean = false;

  constructor(private _route: ActivatedRoute, private _service: PostsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this._route.params.pipe(takeUntil(this.subscripts$)).subscribe((params) => {
      if (!isNullOrUndefined(params["id"])) {
        const postId = params["id"];

        this._service
          .getById(postId)
          .pipe(takeUntil(this.subscripts$))
          .subscribe((post) => (this.post = post));

        this._service
          .getPostComments(postId)
          .pipe(takeUntil(this.subscripts$))
          .subscribe((comments) => {
            this.comments = comments;
            this.isLoading = false;
          });
      }
    });
    console.log(this.post, this.comments);
  }

  ngOnDestroy(): void {
    this.subscripts$.next();
    this.subscripts$.complete();
  }
}
