import { Component, OnInit } from '@angular/core';
import { HorariossalonService } from '../horariossalon.service';
import { getLocaleNumberSymbol } from '@angular/common';
import { MateriaI } from '../../../shared/models/materia.interface';

// Horario (Tiempo, Materia, Salon)
// Tiempo (dia, hora) -- dia: lunes-sabado hora:1-13 (7am-7pm)
// INSERT INTO `horarios` (`hId`, `hDia`, `hHora`, `hMateria`, `hSalon`) VALUES ('Lunes1', 'Lunes', '1', 'Materia 1', 'Salon 1');

export interface PeriodicElement {
  hora: string;
  lunes: string;
  martes: string;
  miercoles: string;
  jueves: string;
  viernes: string;
  sabado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {hora: '7am', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
  {hora: '8am', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
  {hora: '9am', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
  {hora: '10am', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
  {hora: '11am', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},

];

@Component({
  selector: 'app-horariosalon',
  templateUrl: './horariosalon.component.html',
  styleUrls: ['./horariosalon.component.css']
})
export class HorariosalonComponent implements OnInit {

horarios = null;
  horario = {
    hId: null,
    hDia: null,
    hHora: null,
    hMateria: null,
    hSalon: null,
  };

  materiaNull: MateriaI = {
    matId: 0,
    matNombre: '',
    matAsignacionTS: '',
    matPrograma: '',
    matCupo: 0,
    matSemestre: 0,
    matProfesores: ''};

  displayedColumns: string[] = ['hora', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
  dataSource = ELEMENT_DATA;

  constructor(private HorariossalonService: HorariossalonService) { }

  ngOnInit() {
    this.obtenerHorarios();

    let salones: string[] = ['Salon 1', 'Salon 2', 'Salon 3'];
    let dias: string[] = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    let horas: number[] = [1, 2, 3, 4, 5, 6];
    let horarioSalon: (string[] | number[])[] = [salones , dias, horas];
    let horarioxSalon: MateriaI[] = [];
    //let horarioSalon1: MateriaI[] = [null, null, null, null, null, null];
    let horarioSalon2: MateriaI[] = [this.materiaNull, this.materiaNull, this.materiaNull, {matId: 1,
      matNombre: 'materia 1',
      matAsignacionTS: 'asignacionTS',
      matPrograma: 'programa 1',
      matCupo: 20,
      matSemestre: 10,
      matProfesores: 'profesores 1'}, this.materiaNull, this.materiaNull];
    //let horarioSalon3: MateriaI[] = [null, null, null, null, null, null];

    const ELEMENT_DATA2: PeriodicElement[] = [
      {hora: '7am', 
      lunes: horarioSalon2[0].matNombre, 
      martes: horarioSalon2[1].matNombre, 
      miercoles: horarioSalon2[2].matNombre, 
      jueves: horarioSalon2[3].matNombre, 
      viernes: horarioSalon2[4].matNombre, 
      sabado: horarioSalon2[5].matNombre},
      {hora: '8am', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
      {hora: '9am', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
      {hora: '10am', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
      {hora: '11am', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
    
    ];
    let displayedColumns: string[] = ['hora', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    let dataSource2 = ELEMENT_DATA2;

    console.log(horarioSalon2);

    for (var salon of salones) {
      //console.log(salon);
    }

    for (var horario of horarioSalon[1]) {
      //console.log(horario);
    }


  }



  obtenerHorarios() {
    this.HorariossalonService.obtenerHorarios()
    .subscribe(
      result => this.horarios = result
    );
  }

  hayRegistros() {
    if (this.horarios == null) {
      return false;
    } else {
      return true;
    }
  }
/*
  crearMateria() {
    console.log(this.horario);
    this.HorariossalonService.crearHorario(this.horario).subscribe(
      datos => {
        // tslint:disable-next-line: no-string-literal
        if (datos['resultado'] === 'OK') {
          // tslint:disable-next-line: no-string-literal
          alert(datos['mensaje']);
          this.obtenerHorarios();
        }
      }
    );
  }

  borrarMateria(idMateria) {
    console.log(idMateria);
    this.HorariossalonService.borrarHorario(idMateria).subscribe(
      datos => {
        // tslint:disable-next-line: no-string-literal
        if (datos['resultado'] === 'OK') {
          // tslint:disable-next-line: no-string-literal
          alert(datos['mensaje']);
          this.obtenerHorarios();
        }
      }
    );
  }

  editarMateria() {
    console.log(this.horario);
    this.HorariossalonService.editarHorario(this.horario).subscribe(
      datos => {
        // tslint:disable-next-line: no-string-literal
        if (datos['resultado'] === 'OK') {
          // tslint:disable-next-line: no-string-literal
          alert(datos['mensaje']);
          this.obtenerHorarios();
        }
      }
    );
  }

  buscarHorario(idHorario) {
    console.log(this.horario);
    this.HorariossalonService.buscarHorario(idHorario).subscribe(
      result => this.horario = result[0]
    );
  }
*/

}
