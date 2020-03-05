import { Component, OnInit } from '@angular/core';
import { HorariossalonService } from '../horariossalon.service';
import { getLocaleNumberSymbol } from '@angular/common';
import { MateriaI } from '../../../shared/models/materia.interface';

// Horario por día: lunes a sábado -> salones vs 7am-7pm

export interface PeriodicElement {
  hora: string;
  salon1: string;
  salon2: string;
  salon3: string;

}
interface DiaSelect {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-horariodia',
  templateUrl: './horariodia.component.html',
  styleUrls: ['./horariodia.component.css']
})
export class HorariodiaComponent implements OnInit {

  dataSource: PeriodicElement[];
  displayedColumns: string[] ;

  horarios = null;
    horario = {
      hId: null,
      hDia: null,
      hHora: null,
      hMateria: null,
      hSalon: null,
    };

  selectedDia: string;

  diasselect: DiaSelect[] = [
    {value: 'Lunes', viewValue: 'Lunes'},
    {value: 'Martes', viewValue: 'Martes'},
    {value: 'Miercoles', viewValue: 'Miercoles'},
    {value: 'Jueves', viewValue: 'Jueves'},
    {value: 'Viernes', viewValue: 'Viernes'},
    {value: 'Sabado', viewValue: 'Sabado'}
  ];

  constructor(private HorariossalonService: HorariossalonService) { }

  ngOnInit() {
    this.obtenerHorarios();
  }

  obtenerHorarios() {
    this.HorariossalonService.obtenerHorarios()
    .subscribe(
      result => this.horarios = result
    );
    console.log('Obtiene Horarios');
  }

  hayRegistros() {
    if (this.horarios == null) {
      return false;
    } else {
      return true;
    }
  }

  hayRegistrosHorariosDia() {
    if (this.horarios == null) {
      return false;
    } else {

      //Obtener Horarios (`hId`, `hDia`, `hHora`, `hMateria`, `hSalon`)
        //- recorrer horarios
          //- si hDia = dia
              //- si hSalon = Salon 1 ... si hSalon = Salon N
                  //- si hHora = 1 ... si hHora = 13

        this.dataSource = [
          {hora: '7 am', salon1: '', salon2: '', salon3: ''},
          {hora: '8 am', salon1: '', salon2: '', salon3: ''},
          {hora: '9 am', salon1: '', salon2: '', salon3: ''},
          {hora: '10 am', salon1: '', salon2: '', salon3: ''},
          {hora: '11 am', salon1: '', salon2: '', salon3: ''},
          {hora: '12 am', salon1: '', salon2: '', salon3: ''},
          {hora: '1 pm', salon1: '', salon2: '', salon3: ''},
          {hora: '2 pm', salon1: '', salon2: '', salon3: ''},
          {hora: '3 pm', salon1: '', salon2: '', salon3: ''},
          {hora: '4 pm', salon1: '', salon2: '', salon3: ''},
          {hora: '5 pm', salon1: '', salon2: '', salon3: ''},
          {hora: '6 pm', salon1: '', salon2: '', salon3: ''},
          {hora: '7 pm', salon1: '', salon2: '', salon3: ''},
        ];

        // lógica para mostrar horario por dia

        for (var horario of this.horarios) {
          //if (horario[1] == 'Lunes') {
          if (horario[1] == this.selectedDia ) {
            if (horario[4] == 'Salon 1') {
              if (horario[2] == 1) {
                this.dataSource[0].salon1 = horario[3];
              } else if (horario[2] == 2) {
                this.dataSource[1].salon1 = horario[3];
              } else if (horario[2] == 3) {
                this.dataSource[2].salon1 = horario[3];
              } else if (horario[2] == 4) {
                this.dataSource[3].salon1 = horario[3];
              } else if (horario[2] == 5) {
                this.dataSource[4].salon1 = horario[3];
              } else if (horario[2] == 6) {
                this.dataSource[5].salon1 = horario[3];
              } else if (horario[2] == 7) {
                this.dataSource[6].salon1 = horario[3];
              } else if (horario[2] == 8) {
                this.dataSource[6].salon1 = horario[3];
              } else if (horario[2] == 9) {
                this.dataSource[8].salon1 = horario[3];
              } else if (horario[2] == 10) {
                this.dataSource[9].salon1 = horario[3];
              } else if (horario[2] == 11) {
                this.dataSource[10].salon1 = horario[3];
              } else if (horario[2] == 12) {
                this.dataSource[11].salon1 = horario[3];
              } else if (horario[2] == 13) {
                this.dataSource[12].salon1 = horario[3];
              }
            } else if (horario[4] == 'Salon 2') {
              if (horario[2] == 1) {
                this.dataSource[0].salon2 = horario[3];
              } else if (horario[2] == 2) {
                this.dataSource[1].salon2 = horario[3];
              } else if (horario[2] == 3) {
                this.dataSource[2].salon2 = horario[3];
              } else if (horario[2] == 4) {
                this.dataSource[3].salon2 = horario[3];
              } else if (horario[2] == 5) {
                this.dataSource[4].salon2 = horario[3];
              } else if (horario[2] == 6) {
                this.dataSource[5].salon2 = horario[3];
              } else if (horario[2] == 7) {
                this.dataSource[6].salon2 = horario[3];
              } else if (horario[2] == 8) {
                this.dataSource[6].salon2 = horario[3];
              } else if (horario[2] == 9) {
                this.dataSource[8].salon2 = horario[3];
              } else if (horario[2] == 10) {
                this.dataSource[9].salon2 = horario[3];
              } else if (horario[2] == 11) {
                this.dataSource[10].salon2 = horario[3];
              } else if (horario[2] == 12) {
                this.dataSource[11].salon2 = horario[3];
              } else if (horario[2] == 13) {
                this.dataSource[12].salon2 = horario[3];
              }
            } else if (horario[4] == 'Salon 3') {
              if (horario[2] == 1) {
                this.dataSource[0].salon3 = horario[3];
              } else if (horario[2] == 2) {
                this.dataSource[1].salon3 = horario[3];
              } else if (horario[2] == 3) {
                this.dataSource[2].salon3 = horario[3];
              } else if (horario[2] == 4) {
                this.dataSource[3].salon3 = horario[3];
              } else if (horario[2] == 5) {
                this.dataSource[4].salon3 = horario[3];
              } else if (horario[2] == 6) {
                this.dataSource[5].salon3 = horario[3];
              } else if (horario[2] == 7) {
                this.dataSource[6].salon3 = horario[3];
              } else if (horario[2] == 8) {
                this.dataSource[6].salon3 = horario[3];
              } else if (horario[2] == 9) {
                this.dataSource[8].salon3 = horario[3];
              } else if (horario[2] == 10) {
                this.dataSource[9].salon3 = horario[3];
              } else if (horario[2] == 11) {
                this.dataSource[10].salon3 = horario[3];
              } else if (horario[2] == 12) {
                this.dataSource[11].salon3 = horario[3];
              } else if (horario[2] == 13) {
                this.dataSource[12].salon3 = horario[3];
              }
            } /* else if (horario[1] == 'Salon 4') {
              if (horario[2] == 1) {
                this.dataSource[0].jueves = horario[3];
              } else if (horario[2] == 2) {
                this.dataSource[1].jueves = horario[3];
              } else if (horario[2] == 3) {
                this.dataSource[2].jueves = horario[3];
              } else if (horario[2] == 4) {
                this.dataSource[3].jueves = horario[3];
              } else if (horario[2] == 5) {
                this.dataSource[4].jueves = horario[3];
              } else if (horario[2] == 6) {
                this.dataSource[5].jueves = horario[3];
              } else if (horario[2] == 7) {
                this.dataSource[6].jueves = horario[3];
              } else if (horario[2] == 8) {
                this.dataSource[6].jueves = horario[3];
              } else if (horario[2] == 9) {
                this.dataSource[8].jueves = horario[3];
              } else if (horario[2] == 10) {
                this.dataSource[9].jueves = horario[3];
              } else if (horario[2] == 11) {
                this.dataSource[10].jueves = horario[3];
              } else if (horario[2] == 12) {
                this.dataSource[11].jueves = horario[3];
              } else if (horario[2] == 13) {
                this.dataSource[12].jueves = horario[3];
              }
            } else if (horario[1] == 'Salon 5') {
              if (horario[2] == 1) {
                this.dataSource[0].viernes = horario[3];
              } else if (horario[2] == 2) {
                this.dataSource[1].viernes = horario[3];
              } else if (horario[2] == 3) {
                this.dataSource[2].viernes = horario[3];
              } else if (horario[2] == 4) {
                this.dataSource[3].viernes = horario[3];
              } else if (horario[2] == 5) {
                this.dataSource[4].viernes = horario[3];
              } else if (horario[2] == 6) {
                this.dataSource[5].viernes = horario[3];
              } else if (horario[2] == 7) {
                this.dataSource[6].viernes = horario[3];
              } else if (horario[2] == 8) {
                this.dataSource[6].viernes = horario[3];
              } else if (horario[2] == 9) {
                this.dataSource[8].viernes = horario[3];
              } else if (horario[2] == 10) {
                this.dataSource[9].viernes = horario[3];
              } else if (horario[2] == 11) {
                this.dataSource[10].viernes = horario[3];
              } else if (horario[2] == 12) {
                this.dataSource[11].viernes = horario[3];
              } else if (horario[2] == 13) {
                this.dataSource[12].viernes = horario[3];
              }
            } else if (horario[1] == 'Salon 6') {
              if (horario[2] == 1) {
                this.dataSource[0].sabado = horario[3];
              } else if (horario[2] == 2) {
                this.dataSource[1].sabado = horario[3];
              } else if (horario[2] == 3) {
                this.dataSource[2].sabado = horario[3];
              } else if (horario[2] == 4) {
                this.dataSource[3].sabado = horario[3];
              } else if (horario[2] == 5) {
                this.dataSource[4].sabado = horario[3];
              } else if (horario[2] == 6) {
                this.dataSource[5].sabado = horario[3];
              } else if (horario[2] == 7) {
                this.dataSource[6].sabado = horario[3];
              } else if (horario[2] == 8) {
                this.dataSource[6].sabado = horario[3];
              } else if (horario[2] == 9) {
                this.dataSource[8].sabado = horario[3];
              } else if (horario[2] == 10) {
                this.dataSource[9].sabado = horario[3];
              } else if (horario[2] == 11) {
                this.dataSource[10].sabado = horario[3];
              } else if (horario[2] == 12) {
                this.dataSource[11].sabado = horario[3];
              } else if (horario[2] == 13) {
                this.dataSource[12].sabado = horario[3];
              }
            } */
          }
        }
        this.displayedColumns = ['hora', 'salon1', 'salon2', 'salon3'];
        return true;
    }
  }

  capturar() {
    console.log('Día Seleccionado: ' + this.selectedDia);
  }

}
