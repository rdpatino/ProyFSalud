import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorariodiaComponent } from './horariodia.component';

const routes: Routes = [{ path: '', component: HorariodiaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HorariodiaRoutingModule { }
