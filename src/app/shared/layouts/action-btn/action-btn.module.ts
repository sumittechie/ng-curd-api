import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBtnComponent } from './action-btn.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [ActionBtnComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [ActionBtnComponent]
})
export class ActionBtnModule { }
