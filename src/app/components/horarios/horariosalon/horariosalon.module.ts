import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorariosalonRoutingModule } from './horariosalon-routing.module';
import { HorariosalonComponent } from './horariosalon.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../../material.module';



@NgModule({
  declarations: [HorariosalonComponent],
  imports: [
    CommonModule,
    HorariosalonRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class HorariosalonModule { }
