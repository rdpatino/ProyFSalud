import { Component, OnInit } from '@angular/core';
import { HorariossalonService } from '../horariossalon.service';
import { getLocaleNumberSymbol } from '@angular/common';
import { MateriaI } from '../../../shared/models/materia.interface';

// Horario por día: lunes a sábado -> salones vs 7am-7pm

/*
export interface PeriodicElement {
  hora: string;
  salon1: string;
  salon2: string;
  salon3: string;
}
*/
export interface Salon {
  sId: string;
  sNombre: string;
  sCupo: number;
  sDetalles: string;
};
export interface PeriodicElement {
  hora1: string;
  hora2: string;
  hora3: string;
  hora4: string;
  hora5: string;
  hora6: string;
  hora7: string;
  hora8: string;
  hora9: string;
  hora10: string;
  hora11: string;
  hora12: string;
  hora13: string;
  nombreSalon: string;
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
  horas: string[];
  numSalones: number = 0;
  indice: number =0;

  horarios = null;
    horario = {
      hId: null,
      hDia: null,
      hHora: null,
      hMateria: null,
      hSalon: null,
    };

  salones = null;
  salon = {
    sId: null,
    sNombre: null,
    sCupo: null,
    sDetalles: null,
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
    this.obtenerSalones();
  }

  obtenerHorarios() {
    this.HorariossalonService.obtenerHorarios()
    .subscribe(
      result => this.horarios = result
    );
    console.log('Obtiene Horarios');
  }
  obtenerSalones() {
    this.HorariossalonService.obtenerSalones()
    .subscribe(
      result => this.salones = result
    );
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
        /*
        this.dataSource = [
          {hora: '7 am - 8 pm', salon1: '', salon2: '', salon3: ''},
          {hora: '8 am - 9 pm', salon1: '', salon2: '', salon3: ''},
          {hora: '9 am', salon1: '', salon2: '', salon3: ''},
          {hora: '10 am', salon1: '', salon2: '', salon3: ''},
          {hora: '11 am', salon1: '', salon2: '', salon3: ''},
          {hora: '12 m', salon1: '', salon2: '', salon3: ''},
          {hora: '1 pm', salon1: '', salon2: '', salon3: ''},
          {hora: '2 pm', salon1: '', salon2: '', salon3: ''},
          {hora: '3 pm', salon1: '', salon2: '', salon3: ''},
          {hora: '4 pm', salon1: '', salon2: '', salon3: ''},
          {hora: '5 pm', salon1: '', salon2: '', salon3: ''},
          {hora: '6 pm', salon1: '', salon2: '', salon3: ''},
          {hora: '7 pm', salon1: '', salon2: '', salon3: ''},
        ]; */
        this.horas = ['7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7'];
        this.dataSource = [
          {nombreSalon: '', 
          hora1: '',hora2: '',hora3: '',
          hora4: '',hora5: '',hora6: '',
          hora7: '',hora8: '',hora9: '',
          hora10: '', hora11: '', hora12: '', hora13: '' }
        ];

        if (this.salones == null) {
        } else {
          this.numSalones = this.salones.length;
        }
        

        for (let index = 0; index < this.numSalones; index++) {
          const element = this.salones[index].sNombre;
          //console.log(element);
          this.dataSource.push({nombreSalon: element,
          hora1: '', hora2: '',hora3: '',
          hora4: '',hora5: '',hora6: '',
          hora7: '',hora8: '',hora9: '',
          hora10: '', hora11: '', hora12: '', hora13: ''});
        }
        

        

        // lógica para mostrar horario por dia

        for (var horario of this.horarios) {
          //if (horario[1] == 'Lunes') {
          if (horario[1] == this.selectedDia ) {
            this.indice=0;
            for (const salon of this.salones) {
              this.indice = this.indice+1;
              if (horario[4] == salon[1]) {
              if (horario[2] == 1) {
                this.dataSource[this.indice].hora1 = horario[3];
              } else if (horario[2] == 2) {
                this.dataSource[this.indice].hora2 = horario[3];
              } else if (horario[2] == 3) {
                this.dataSource[this.indice].hora3 = horario[3];
              } else if (horario[2] == 4) {
                this.dataSource[this.indice].hora4 = horario[3];
              } else if (horario[2] == 5) {
                this.dataSource[this.indice].hora5 = horario[3];
              } else if (horario[2] == 6) {
                this.dataSource[this.indice].hora6 = horario[3];
              } else if (horario[2] == 7) {
                this.dataSource[this.indice].hora7 = horario[3];
              } else if (horario[2] == 8) {
                this.dataSource[this.indice].hora8 = horario[3];
              } else if (horario[2] == 9) {
                this.dataSource[this.indice].hora9 = horario[3];
              } else if (horario[2] == 10) {
                this.dataSource[this.indice].hora10 = horario[3];
              } else if (horario[2] == 11) {
                this.dataSource[this.indice].hora11 = horario[3];
              } else if (horario[2] == 12) {
                this.dataSource[this.indice].hora12 = horario[3];
              } else if (horario[2] == 13) {
                this.dataSource[this.indice].hora13 = horario[3];
              }
            } 
            }
            
          }
        }
        this.dataSource.shift(); // elimina primer array de data source, array de inicialización
        this.displayedColumns = ['nombreSalon', 'hora1', 'hora2', 'hora3', 'hora4', 'hora5', 'hora6', 'hora7', 'hora8', 'hora9', 'hora10', 'hora11', 'hora12', 'hora13'];
        return true;
    }
  }

  capturar() {
    console.log('Día Seleccionado: ' + this.selectedDia);
  }

}
