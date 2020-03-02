import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListamateriasRoutingModule } from './listamaterias-routing.module';
import { ListamateriasComponent } from './listamaterias.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../../material.module';


@NgModule({
  declarations: [ListamateriasComponent],
  imports: [
    CommonModule,
    ListamateriasRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class ListamateriasModule { }
