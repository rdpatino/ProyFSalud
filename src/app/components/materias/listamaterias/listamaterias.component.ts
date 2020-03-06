import { Component, OnInit } from '@angular/core';
import { MateriasService } from '../materias.service';

interface SalonSelect {
  value: string;
  viewValue: string;
}
interface ProfeSelect {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-listamaterias',
  templateUrl: './listamaterias.component.html',
  styleUrls: ['./listamaterias.component.css']
})
export class ListamateriasComponent implements OnInit {

  // Materia (nombre, asignacionTS[Tiempo, Salon], programa, cupo, semestre, Profesores)

  materias = null;
  materia = {
    matId: null,
    matNombre: null,
    matHorarios: null,
    matPrograma: null,
    matCupo: null,
    matSemestre: null,
    matProfesores: null,
  };

  salones = null;
  salon = {
    sId: null,
    sNombre: null,
    sCupo: null,
    sDetalles: null,
  };

  profesores = null;
  profe = {
    pId: null,
    pNombre: null,
    pDetalles: null,
  };

  selectedSalon: string;
  selectedProfe: string;

  salonesselect: SalonSelect[];
  /*salonesselect: SalonSelect[] = [
    {value: 'Salon 1', viewValue: 'Salon 1'},
    {value: 'Salon 2', viewValue: 'Salon 2'},
    {value: 'Salon 3', viewValue: 'Salon 3'}
  ];*/
  profesoresselect: ProfeSelect[];
  /*profesoresselect: SalonSelect[] = [
    {value: 'Profe 1', viewValue: 'Profe 1'},
    {value: 'Profe 2', viewValue: 'Profe 2'},
    {value: 'Profe 3', viewValue: 'Profe 3'}
  ];*/

  constructor(private MateriasService: MateriasService) { }

  ngOnInit() {
    this.obtenerMaterias();
    this.obtenerProfesores();
    this.obtenerSalones();

    console.log('Materias: ' + this.materias);
    console.log('Profesores: ' + this.profesores);
    console.log('Salones: ' + this.salones);

  }

  obtenerMaterias() {
    this.MateriasService.obtenerMaterias()
    .subscribe(
      result => this.materias = result
    );
  }
  obtenerProfesores() {
    this.MateriasService.obtenerProfesores()
    .subscribe(
      result => this.profesores = result
    );
  }
  obtenerSalones() {
    this.MateriasService.obtenerSalones()
    .subscribe(
      result => this.salones = result
    );
  }

  crearMateria() {
    console.log(this.materia);
    this.MateriasService.crearMateria(this.materia).subscribe(
      datos => {
        // tslint:disable-next-line: no-string-literal
        if (datos['resultado'] === 'OK') {
          // tslint:disable-next-line: no-string-literal
          alert(datos['mensaje']);
          this.obtenerMaterias();
        }
      }
    );
  }

  borrarMateria(idMateria) {
    console.log(idMateria);
    this.MateriasService.borrarMateria(idMateria).subscribe(
      datos => {
        // tslint:disable-next-line: no-string-literal
        if (datos['resultado'] === 'OK') {
          // tslint:disable-next-line: no-string-literal
          alert(datos['mensaje']);
          this.obtenerMaterias();
        }
      }
    );
  }

  editarMateria() {
    console.log(this.materia);
    this.MateriasService.editarMateria(this.materia).subscribe(
      datos => {
        // tslint:disable-next-line: no-string-literal
        if (datos['resultado'] === 'OK') {
          // tslint:disable-next-line: no-string-literal
          alert(datos['mensaje']);
          this.obtenerMaterias();
        }
      }
    );
  }

  buscarMateria(idMateria) {
    console.log(this.materia);
    this.MateriasService.buscarMateria(idMateria).subscribe(
      result => this.materia = result[0]
    );
  }

  hayRegistros() {
    if (this.materias == null) {
      return false;
    } else {
      return true;
    }
  }

  hayprofes() {
    if (this.profesoresselect == null) {
      return true;
    } else {
      return false;
    }
  }

  capturarS() {
    console.log('Salón Seleccionado: ' + this.selectedSalon);
  }
  capturarP() {
    console.log('Profe Seleccionado: ' + this.selectedProfe);
  }

  actualizarSalonesyProfes() {
    console.log('-Materias: ' + this.materias);
    console.log('-Profesores: ' + this.profesores);
    console.log('-Salones: ' + this.salones);

    this.salonesselect = [{value: '', viewValue: ''}];
    this.profesoresselect = [{value: '', viewValue: ''}];

    //this.profesoresselect.push({value: 'Profe 1', viewValue: 'Profe 1'});

    for (const profe of this.profesores) {
      this.profesoresselect.push({value: profe[0], viewValue: profe[1]});
      //console.log('profe: '+ profe[0] +' '+ profe[1] +' '+ profe[2]);
    }
    for (const salon of this.salones) {
      this.salonesselect.push({value: salon[0], viewValue: salon[1]});
    }

  }

}
