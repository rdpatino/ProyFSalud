import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatButtonModule, MatCardModule, MatToolbarModule, MatTableModule, MatSelectModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { from } from 'rxjs';

const myModule = [
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatTableModule,
  MatDialogModule,
  MatSelectModule
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
