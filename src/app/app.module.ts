import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MateriaComponent } from './components/materias/materia/materia.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MateriasService } from './components/materias/materias.service';
import { ListamateriasComponent } from './components/materias/listamaterias/listamaterias.component';
import { HorariossalonService } from './components/horarios/horariossalon.service';
import { NuevamateriaComponent } from './components/materias/nuevamateria/nuevamateria.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MateriaComponent,
    ToolbarComponent,
    NuevamateriaComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  entryComponents: [ModalComponent],
  providers: [MateriasService, HorariossalonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
