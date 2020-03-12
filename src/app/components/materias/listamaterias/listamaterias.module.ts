import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListamateriasRoutingModule } from './listamaterias-routing.module';
import { ListamateriasComponent } from './listamaterias.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../../material.module';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListamateriasComponent],
  imports: [
    CommonModule,
    ListamateriasRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    MatListModule,
    ReactiveFormsModule
  ]
})
export class ListamateriasModule { }
