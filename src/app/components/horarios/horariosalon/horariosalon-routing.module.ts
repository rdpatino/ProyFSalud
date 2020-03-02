import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorariosalonComponent } from './horariosalon.component';

const routes: Routes = [{ path: '', component: HorariosalonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorariosalonRoutingModule { }
