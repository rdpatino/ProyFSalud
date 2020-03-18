import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaprofesoresComponent } from './listaprofesores.component';

const routes: Routes = [{ path: '', component: ListaprofesoresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaprofesoresRoutingModule { }
