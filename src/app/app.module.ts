import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TaskHeaderComponent } from './home/task-header/task-header.component';
import { TaskBodyComponent } from './home/task-body/task-body.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHeadersInterceptor } from './shared/http-headers.interceptor';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    TaskHeaderComponent,
    TaskBodyComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpHeadersInterceptor, multi: true }
  ]
})
export class AppModule { }
