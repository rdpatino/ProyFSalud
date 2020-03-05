import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HorariodiaRoutingModule } from './horariodia-routing.module';
import { HorariodiaComponent } from './horariodia.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../../../material.module';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [HorariodiaComponent],
  imports: [
    CommonModule,
    HorariodiaRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class HorariodiaModule { }
