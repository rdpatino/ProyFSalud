import { Component, OnInit } from '@angular/core';

import { MateriasService } from '../../materias/materias.service';

@Component({
  selector: 'app-listaprofesores',
  templateUrl: './listaprofesores.component.html',
  styleUrls: ['./listaprofesores.component.css']
})
export class ListaprofesoresComponent implements OnInit {

  profesores = null;
  profesor = {
    pId: null,
    pNombre: null,
    pDetalles: null,
  };

  constructor(private MateriasService: MateriasService) { }

  ngOnInit() {
    this.obtenerProfesores();
  }

  obtenerProfesores() {
    this.MateriasService.obtenerProfesores()
    .subscribe(
      result => this.profesores = result
    );
  }

  crearProfesor() {
    console.log(this.profesor);
    this.MateriasService.crearProfesor(this.profesor).subscribe(
      datos => {
        // tslint:disable-next-line: no-string-literal
        if (datos['resultado'] === 'OK') {
          // tslint:disable-next-line: no-string-literal
          alert(datos['mensaje']);
          this.obtenerProfesores();
        }
      }
    );
  }
  borrarProfesor(idProfesor) {
    console.log(idProfesor);
    this.MateriasService.borrarProfesor(idProfesor).subscribe(
      datos => {
        // tslint:disable-next-line: no-string-literal
        if (datos['resultado'] === 'OK') {
          // tslint:disable-next-line: no-string-literal
          alert(datos['mensaje']);
          this.obtenerProfesores();
        }
      }
    );
  }
  editarProfesor() {
    this.MateriasService.editarProfesor(this.profesor).subscribe(
      datos => {
        // tslint:disable-next-line: no-string-literal
        if (datos['resultado'] === 'OK') {
          // tslint:disable-next-line: no-string-literal
          alert(datos['mensaje']);
          this.obtenerProfesores();
        }
      }
    );
  }
  buscarProfesor(idProfesor) {
    this.MateriasService.buscarProfesor(idProfesor).subscribe(
      result => this.profesor = result[0]
    );
  }

  hayRegistros() {
    if (this.profesores == null) {
      return false;
    } else {
      return true;
    }
  }

  verificarProfesor(){
  }

  

}
