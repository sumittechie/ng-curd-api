import { NgModule } from '@angular/core';
import { MatCardModule, MatCardActions } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';

const matModules = [
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  LayoutModule,
  MatToolbarModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatSelectModule,
  MatChipsModule,
  MatInputModule,
  MatTooltipModule,
  MatProgressSpinnerModule
];

@NgModule({
  imports: [matModules],
  exports: [matModules]
})
export class MaterialModule { }
