import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthenticateGuard } from './shared/authenticate.guard';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthenticateGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
