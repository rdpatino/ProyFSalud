import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorariodiaRoutingModule } from './horariodia-routing.module';
import { HorariodiaComponent } from './horariodia.component';


@NgModule({
  declarations: [HorariodiaComponent],
  imports: [
    CommonModule,
    HorariodiaRoutingModule
  ]
})
export class HorariodiaModule { }
