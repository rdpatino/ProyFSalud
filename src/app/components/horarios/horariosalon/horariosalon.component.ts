import { Component, OnInit } from '@angular/core';
import { HorariossalonService } from '../horariossalon.service';
import { getLocaleNumberSymbol } from '@angular/common';

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

  displayedColumns: string[] = ['hora', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
  dataSource = ELEMENT_DATA;

  dias: string[] = ['Lunes', 'Martes', 'Miercoles'];
  salones = ['Salon 1', 'Salon 2', 'Salon 3'];
  horarioSalon = [this.salones , ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'], [1, 2, 3, 4, 5, 6]];



  constructor(private HorariossalonService: HorariossalonService) { }

  ngOnInit() {
    this.obtenerHorarios();

let salones = ['Salon 1', 'Salon 2', 'Salon 3'];
let dias: string[] = ['Lunes', 'Martes', 'Miercoles'];
let horarioSalon = [salones , ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'], [1, 2, 3, 4, 5, 6]];


for (var salon of salones) {
  console.log(salon);
}

for (const parte in horarioSalon) {
  for (var i of parte) {
    console.log(i);
  }
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
