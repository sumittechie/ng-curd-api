import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsComponent } from './albums.component';
import { Routes, RouterModule } from '@angular/router';
import { PageModule, SpinnerModule, ActionBarModule } from 'src/app/shared/layouts';

const albumsRoutes: Routes = [
  {
    path: '', component: AlbumsComponent
  }
];

@NgModule({
  declarations: [AlbumsComponent],
  imports: [
    PageModule,
    CommonModule,
    SpinnerModule,
    ActionBarModule,
    RouterModule.forChild(albumsRoutes)
  ]
})
export class AlbumsModule { }
