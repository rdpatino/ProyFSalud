import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListamateriasComponent } from './listamaterias.component';

const routes: Routes = [{ path: '', component: ListamateriasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListamateriasRoutingModule { }
