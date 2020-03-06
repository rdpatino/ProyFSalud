import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListamateriasRoutingModule } from './listamaterias-routing.module';
import { ListamateriasComponent } from './listamaterias.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../../material.module';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [ListamateriasComponent],
  imports: [
    CommonModule,
    ListamateriasRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class ListamateriasModule { }
