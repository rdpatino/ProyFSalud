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
interface SalonSelect {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-horariosalon',
  templateUrl: './horariosalon.component.html',
  styleUrls: ['./horariosalon.component.css']
})
export class HorariosalonComponent implements OnInit {
/*
  displayedColumns: string[] = ['hora', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
  dataSource = ELEMENT_DATA;
  */
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

  materiaNull: MateriaI = {
    matId: 0,
    matNombre: '',
    matAsignacionTS: '',
    matPrograma: '',
    matCupo: 0,
    matSemestre: 0,
    matProfesores: ''
  };

  salones = null;
  salon = {
    sId: null,
    sNombre: null,
    sCupo: null,
    sDetalles: null,
  };

  selectedSalon: string;

  salonesselect: SalonSelect[];
/*
  salonesselect: SalonSelect[] = [
    {value: 'Salon 1', viewValue: 'Salon 1'},
    {value: 'Salon 2', viewValue: 'Salon 2'},
    {value: 'Salon 3', viewValue: 'Salon 3'}
  ]; */

  constructor(private HorariossalonService: HorariossalonService) { }

  ngOnInit() {
    this.obtenerHorarios();
    this.obtenerSalones();
    //setTimeout(function(){alert("Hello"); }, 3000);
    //this.actualizarSalones();
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
    console.log('Obtiene Salones');
  }

  haySalones() {
    if (this.salonesselect == null) {
      return true;
    } else {
      return false;
    }
  }

  hayRegistrosHorariosSalon() {
    if (this.horarios == null) {
      return false;
    } else {

      //Obtener Horarios (`hId`, `hDia`, `hHora`, `hMateria`, `hSalon`)
        //- recorrer horarios
          //- si hSalon = salon
              //- si hDia = Lunes ... si hDia = Sabado
                  //- si hHora = 1 ... si hHora = 13

        this.dataSource = [
          {hora: '7 am', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
          {hora: '8 am', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
          {hora: '9 am', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
          {hora: '10 am', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
          {hora: '11 am', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
          {hora: '12 am', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
          {hora: '1 pm', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
          {hora: '2 pm', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
          {hora: '3 pm', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
          {hora: '4 pm', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
          {hora: '5 pm', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
          {hora: '6 pm', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
          {hora: '7 pm', lunes: '', martes: '', miercoles: '', jueves: '', viernes: '', sabado: ''},
        ];

        // lógica para mostrar horario por salon

        for (var horario of this.horarios) {
          //if (horario[4] == 'Salon 1') {
          if (horario[4] == this.selectedSalon ) {
            if (horario[1] == 'Lunes') {
              if (horario[2] == 'H7-8') {
                this.dataSource[0].lunes = horario[3];
              } else if (horario[2] == 'H8-9') {
                this.dataSource[1].lunes = horario[3];
              } else if (horario[2] == 'H9-10') {
                this.dataSource[2].lunes = horario[3];
              } else if (horario[2] == 'H10-11') {
                this.dataSource[3].lunes = horario[3];
              } else if (horario[2] == 'H11-12') {
                this.dataSource[4].lunes = horario[3];
              } else if (horario[2] == 'H12-1') {
                this.dataSource[5].lunes = horario[3];
              } else if (horario[2] == 'H1-2') {
                this.dataSource[6].lunes = horario[3];
              } else if (horario[2] == 'H2-3') {
                this.dataSource[6].lunes = horario[3];
              } else if (horario[2] == 'H3-4') {
                this.dataSource[8].lunes = horario[3];
              } else if (horario[2] == 'H4-5') {
                this.dataSource[9].lunes = horario[3];
              } else if (horario[2] == 'H5-6') {
                this.dataSource[10].lunes = horario[3];
              } else if (horario[2] == 'H6-7') {
                this.dataSource[11].lunes = horario[3];
              } else if (horario[2] == 'H7-8') {
                this.dataSource[12].lunes = horario[3];
              }
            } else if (horario[1] == 'Martes') {
              if (horario[2] == 'H7-8') {
                this.dataSource[0].martes = horario[3];
              } else if (horario[2] == 'H8-9') {
                this.dataSource[1].martes = horario[3];
              } else if (horario[2] == 'H9-10') {
                this.dataSource[2].martes = horario[3];
              } else if (horario[2] == 'H10-11') {
                this.dataSource[3].martes = horario[3];
              } else if (horario[2] == 'H11-12') {
                this.dataSource[4].martes = horario[3];
              } else if (horario[2] == 'H12-1') {
                this.dataSource[5].martes = horario[3];
              } else if (horario[2] == 'H1-2') {
                this.dataSource[6].martes = horario[3];
              } else if (horario[2] == 'H2-1') {
                this.dataSource[6].martes = horario[3];
              } else if (horario[2] == 'H2-3') {
                this.dataSource[8].martes = horario[3];
              } else if (horario[2] == 'H4-5') {
                this.dataSource[9].martes = horario[3];
              } else if (horario[2] == 'H5-6') {
                this.dataSource[10].martes = horario[3];
              } else if (horario[2] == 'H6-7') {
                this.dataSource[11].martes = horario[3];
              } else if (horario[2] == 'H7-8') {
                this.dataSource[12].martes = horario[3];
              }
            } else if (horario[1] == 'Miercoles') {
              if (horario[2] == 'H7-8') {
                this.dataSource[0].miercoles = horario[3];
              } else if (horario[2] == 'H8-9') {
                this.dataSource[1].miercoles = horario[3];
              } else if (horario[2] == 'H9-10') {
                this.dataSource[2].miercoles = horario[3];
              } else if (horario[2] == 'H10-11') {
                this.dataSource[3].miercoles = horario[3];
              } else if (horario[2] == 'H11-12') {
                this.dataSource[4].miercoles = horario[3];
              } else if (horario[2] == 'H12-1') {
                this.dataSource[5].miercoles = horario[3];
              } else if (horario[2] == 'H1-2') {
                this.dataSource[6].miercoles = horario[3];
              } else if (horario[2] == 'H2-1') {
                this.dataSource[6].miercoles = horario[3];
              } else if (horario[2] == 'H2-3') {
                this.dataSource[8].miercoles = horario[3];
              } else if (horario[2] == 'H4-5') {
                this.dataSource[9].miercoles = horario[3];
              } else if (horario[2] == 'H5-6') {
                this.dataSource[10].miercoles = horario[3];
              } else if (horario[2] == 'H6-7') {
                this.dataSource[11].miercoles = horario[3];
              } else if (horario[2] == 'H7-8') {
                this.dataSource[12].miercoles = horario[3];
              }
            } else if (horario[1] == 'Jueves') {
              if (horario[2] == 'H7-8') {
                this.dataSource[0].jueves = horario[3];
              } else if (horario[2] == 'H8-9') {
                this.dataSource[1].jueves = horario[3];
              } else if (horario[2] == 'H9-10') {
                this.dataSource[2].jueves = horario[3];
              } else if (horario[2] == 'H10-11') {
                this.dataSource[3].jueves = horario[3];
              } else if (horario[2] == 'H11-12') {
                this.dataSource[4].jueves = horario[3];
              } else if (horario[2] == 'H12-1') {
                this.dataSource[5].jueves = horario[3];
              } else if (horario[2] == 'H1-2') {
                this.dataSource[6].jueves = horario[3];
              } else if (horario[2] == 'H2-1') {
                this.dataSource[6].jueves = horario[3];
              } else if (horario[2] == 'H2-3') {
                this.dataSource[8].jueves = horario[3];
              } else if (horario[2] == 'H4-5') {
                this.dataSource[9].jueves = horario[3];
              } else if (horario[2] == 'H5-6') {
                this.dataSource[10].jueves = horario[3];
              } else if (horario[2] == 'H6-7') {
                this.dataSource[11].jueves = horario[3];
              } else if (horario[2] == 'H7-8') {
                this.dataSource[12].jueves = horario[3];
              }
            } else if (horario[1] == 'Viernes') {
              if (horario[2] == 'H7-8') {
                this.dataSource[0].viernes = horario[3];
              } else if (horario[2] == 'H8-9') {
                this.dataSource[1].viernes = horario[3];
              } else if (horario[2] == 'H9-10') {
                this.dataSource[2].viernes = horario[3];
              } else if (horario[2] == 'H10-11') {
                this.dataSource[3].viernes = horario[3];
              } else if (horario[2] == 'H11-12') {
                this.dataSource[4].viernes = horario[3];
              } else if (horario[2] == 'H12-1') {
                this.dataSource[5].viernes = horario[3];
              } else if (horario[2] == 'H1-2') {
                this.dataSource[6].viernes = horario[3];
              } else if (horario[2] == 'H2-1') {
                this.dataSource[6].viernes = horario[3];
              } else if (horario[2] == 'H2-3') {
                this.dataSource[8].viernes = horario[3];
              } else if (horario[2] == 'H4-5') {
                this.dataSource[9].viernes = horario[3];
              } else if (horario[2] == 'H5-6') {
                this.dataSource[10].viernes = horario[3];
              } else if (horario[2] == 'H6-7') {
                this.dataSource[11].viernes = horario[3];
              } else if (horario[2] == 'H7-8') {
                this.dataSource[12].viernes = horario[3];
              }
            } else if (horario[1] == 'Sabado') {
              if (horario[2] == 'H7-8') {
                this.dataSource[0].sabado = horario[3];
              } else if (horario[2] == 'H8-9') {
                this.dataSource[1].sabado = horario[3];
              } else if (horario[2] == 'H9-10') {
                this.dataSource[2].sabado = horario[3];
              } else if (horario[2] == 'H10-11') {
                this.dataSource[3].sabado = horario[3];
              } else if (horario[2] == 'H11-12') {
                this.dataSource[4].sabado = horario[3];
              } else if (horario[2] == 'H12-1') {
                this.dataSource[5].sabado = horario[3];
              } else if (horario[2] == 'H1-2') {
                this.dataSource[6].sabado = horario[3];
              } else if (horario[2] == 'H2-1') {
                this.dataSource[6].sabado = horario[3];
              } else if (horario[2] == 'H2-3') {
                this.dataSource[8].sabado = horario[3];
              } else if (horario[2] == 'H4-5') {
                this.dataSource[9].sabado = horario[3];
              } else if (horario[2] == 'H5-6') {
                this.dataSource[10].sabado = horario[3];
              } else if (horario[2] == 'H6-7') {
                this.dataSource[11].sabado = horario[3];
              } else if (horario[2] == 'H7-8') {
                this.dataSource[12].sabado = horario[3];
              }
            }
          }
        }
        this.displayedColumns = ['hora', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
        return true;
    }
  }

  actualizarSalones() {

    console.log("Salones: "+this.salones[0]);
    //console.log("Horarios: "+this.horarios);

    this.salonesselect = [{value: '', viewValue: ''}];

    for (const salon of this.salones) {
      console.log("Salon: "+this.salon[0]);
      this.salonesselect.push({value: salon[0], viewValue: salon[1]});
    }
    this.salonesselect.shift();
  }

  capturar() {
    console.log('Salón Seleccionado: ' + this.selectedSalon);
    //this.actualizarSalones();
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
