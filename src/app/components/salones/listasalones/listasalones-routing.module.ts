import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListasalonesComponent } from './listasalones.component';

const routes: Routes = [{ path: '', component: ListasalonesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListasalonesRoutingModule { }
