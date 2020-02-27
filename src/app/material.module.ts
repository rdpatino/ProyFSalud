import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatButtonModule, MatCardModule, MatToolbarModule } from '@angular/material';
import { from } from 'rxjs';

const myModule = [
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    myModule
  ],
  exports: [
    myModule
  ]
})
export class MaterialModule { }
