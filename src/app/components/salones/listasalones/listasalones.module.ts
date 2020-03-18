import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListasalonesRoutingModule } from './listasalones-routing.module';
import { ListasalonesComponent } from './listasalones.component';
import { MaterialModule } from '../../../material.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [ListasalonesComponent],
  imports: [
    CommonModule,
    ListasalonesRoutingModule,
    MaterialModule
  ]
})
export class ListasalonesModule { }
