import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListamateriasRoutingModule } from './listamaterias-routing.module';
import { ListamateriasComponent } from './listamaterias.component';


@NgModule({
  declarations: [ListamateriasComponent],
  imports: [
    CommonModule,
    ListamateriasRoutingModule
  ]
})
export class ListamateriasModule { }
