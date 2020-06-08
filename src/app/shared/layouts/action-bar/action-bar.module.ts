import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionBarComponent } from './action-bar.component';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [ActionBarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ActionBarComponent]
})
export class ActionBarModule { }
