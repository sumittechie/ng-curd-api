import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { Routes, RouterModule } from '@angular/router';
import { ActionBarModule, SpinnerModule, PageModule } from 'src/app/shared/layouts';

const commentsRoutes: Routes = [
  {
    path: '', component: CommentsComponent
  }
];

@NgModule({
  declarations: [CommentsComponent],
  imports: [
    PageModule,
    CommonModule,
    SpinnerModule,
    ActionBarModule,
    RouterModule.forChild(commentsRoutes)
  ]
})
export class CommentsModule { }
