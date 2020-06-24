import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticateGuard } from './shared/authenticate.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthenticateGuard],
    children: [
      {
        path: 'posts',
        loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)
      },
      {
        path: 'comments',
        loadChildren: () => import('./modules/comments/comments.module').then(m => m.CommentsModule)
      },
      {
        path: 'albums',
        loadChildren: () => import('./modules/albums/albums.module').then(m => m.AlbumsModule)
      }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
