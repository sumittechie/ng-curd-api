import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PostsComponent } from "./posts.component";
import { Routes, RouterModule } from "@angular/router";
import { MaterialModule } from "src/app/material.module";
import {
  ActionBarModule,
  PageModule,
  ActionBtnModule,
  SpinnerModule,
} from "src/app/shared/layouts";
import { ViewComponent } from "./view/view.component";
import { FlexLayoutModule } from "@angular/flex-layout";

const routs: Routes = [
  {
    path: "",
    component: PostsComponent,
  },
  {
    path: "view/:id",
    component: ViewComponent,
  },
];

@NgModule({
  declarations: [PostsComponent, ViewComponent],
  imports: [
    PageModule,
    CommonModule,
    SpinnerModule,
    MaterialModule,
    ActionBarModule,
    ActionBtnModule,
    FlexLayoutModule,
    RouterModule.forChild(routs),
  ],
})
export class PostsModule {}
