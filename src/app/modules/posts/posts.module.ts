import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { ActionBarModule, PageModule, ActionBtnModule, SpinnerModule } from 'src/app/shared/layouts';

const routs: Routes = [
  {
    path: '', component: PostsComponent
  }
]

@NgModule({
  declarations: [PostsComponent],
  imports: [
    PageModule,
    CommonModule,
    SpinnerModule,
    MaterialModule,
    ActionBarModule,
    ActionBtnModule,
    RouterModule.forChild(routs)
  ]
})
export class PostsModule { }
