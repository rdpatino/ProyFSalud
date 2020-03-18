import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaprofesoresRoutingModule } from './listaprofesores-routing.module';
import { ListaprofesoresComponent } from './listaprofesores.component';
import { MaterialModule } from '../../../material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListaprofesoresComponent],
  imports: [
    CommonModule,
    ListaprofesoresRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    ReactiveFormsModule
  ]
})
export class ListaprofesoresModule { }
