import { Component, OnInit, Inject } from '@angular/core';
import { MateriasService } from '../materias.service';
import { HorariossalonService } from '../../horarios/horariossalon.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ModalComponent} from '../../../shared/modal/modal.component';
import { FormGroup, FormControl, Validators} from '@angular/forms';

interface SalonSelect {
  value: string;
  viewValue: string;
}
interface ProfeSelect {
  value: string;
  viewValue: string;
}
interface DiaSelect {
  value: string;
  viewValue: string;
}
interface HoraSelect {
  value: string;
  viewValue: string;
}
export interface DialogData {
  animal: string;
  name: string;
}
export interface HorarioXM {
  id: string;
  dia: string;
  hora: string;
  materia: string;
  salon: string;
}

@Component({
  selector: 'app-listamaterias',
  templateUrl: './listamaterias.component.html',
  styleUrls: ['./listamaterias.component.css']
})
export class ListamateriasComponent implements OnInit {

  // Materia (nombre, detalles, programa, cupo, semestre, Profesores)

  materias = null;
  materia = {
    matId: null,
    matNombre: null,
    matDetalles: null,
    matPrograma: null,
    matCupo: null,
    matSemestre: null,
    matProfesores: null,
  };

  horarios = null;
    horario = {
      hId: null,
      hDia: null,
      hHora: null,
      hMateria: null,
      hSalon: null,
    };
    //NewhMateria:string;

    //horariosxm: HorarioXM[] = [{id: '', dia: '', hora: '', materia: '', salon: ''}];
    horariosxm: HorarioXM[];

/*
    horariosxm = null;
    horarioxm = {
      hId: null,
      hDia: null,
      hHora: null,
      hMateria: null,
      hSalon: null,
    };
*/

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
  selectedDia: string;
  selectedHora: string;

  salonesselect: SalonSelect[];
  profesoresselect: ProfeSelect[];
  diasselect: DiaSelect[] = [
    {value: 'Lunes', viewValue: 'Lunes'},
    {value: 'Martes', viewValue: 'Martes'},
    {value: 'Miercoles', viewValue: 'Miercoles'},
    {value: 'Jueves', viewValue: 'Jueves'},
    {value: 'Viernes', viewValue: 'Viernes'},
    {value: 'Sabado', viewValue: 'Sabado'},
  ];
  horasselect: HoraSelect[] = [
    {value: 'H7-8', viewValue: '7 - 8 am'},
    {value: 'H8-9', viewValue: '8 - 9 am'},
    {value: 'H9-10', viewValue: '9 - 10 am'},
    {value: 'H10-11', viewValue: '10 - 11 am'},
    {value: 'H11-12', viewValue: '11 - 12 m'},
    {value: 'H12-1', viewValue: '12 - 1 pm'},
    {value: 'H1-2', viewValue: '1 - 2 pm'},
    {value: 'H2-3', viewValue: '2 - 3 pm'},
    {value: 'H3-4', viewValue: '3 - 4 pm'},
    {value: 'H4-5', viewValue: '4 - 5 pm'},
    {value: 'H5-6', viewValue: '5 - 6 pm'},
    {value: 'H6-7', viewValue: '6 - 7 pm'},
    {value: 'H7-8', viewValue: '7 - 8 pm'}
  ];


  constructor(private MateriasService: MateriasService, private HorariossalonService: HorariossalonService,
              public dialog: MatDialog ) { }

  ngOnInit() {
    this.obtenerMaterias();
    this.obtenerProfesores();
    this.obtenerSalones();
    this.obtenerHorarios();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.materias.filter = filterValue.trim().toLowerCase();
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

  obtenerHorarios() {
    this.HorariossalonService.obtenerHorarios()
    .subscribe(
      result => this.horarios = result
    );
  }


  obtenerHorariosXM(idMateria) {
    console.log("Obtiene horarios con: " + idMateria);
    this.horariosxm = [{id: '', dia: '', hora: '', materia: '', salon: ''}];
    //this.NewhMateria = "" ;

    for (const horario of this.horarios) {
      //console.log("Horario en 3: " + horario[3]);
      if (horario[3] == idMateria) {
        this.horariosxm.push({id: horario[0], dia: horario[1], hora: horario[2], materia: horario[3], salon: horario[4]});
        //this.NewhMateria = this.NewhMateria + horario[0] + ","; //para horarios en materia (cambiado a detalles)
        //console.log("Horarios x Materia: "+ horario[0]);
      } else {

      }
      
    }
    this.horariosxm.shift();
    if (this.horariosxm.length>=1) {
      console.log("Cuántos horarios x materia hay?: "+this.horariosxm.length);
    } else {
      this.horariosxm = null;
    }
    
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

  crearHorario() {
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
    //this.editarCambioHorario();
  }
/*
  editarCambioHorario() {
    this.materia.matDetalles = this.NewhMateria;
    console.log(this.materia);
    this.MateriasService.editarCambioHorario(this.materia).subscribe(
      datos => {
        // tslint:disable-next-line: no-string-literal
        if (datos['resultado'] === 'OK') {
          // tslint:disable-next-line: no-string-literal
          alert(datos['mensaje']);
          this.obtenerMaterias();
        }
      }
    );
  } */

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

  borrarHorario(idHorario) {
    console.log(idHorario);
    this.HorariossalonService.borrarHorario(idHorario).subscribe(
      datos => {
        // tslint:disable-next-line: no-string-literal
        if (datos['resultado'] === 'OK') {
          // tslint:disable-next-line: no-string-literal
          alert(datos['mensaje']);
          this.obtenerHorarios();
        }
      }
    );
    //this.editarCambioHorario();
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
    console.log("cuantos tr: "+document.getElementById("myTable").getElementsByTagName("tr").length);
    this.MateriasService.buscarMateria(idMateria).subscribe(
      result => this.materia = result[0]
    );
    //console.log(this.materia);
    this.actualizarSalonesyProfes();
    //this.obtenerHorariosXM(this.materia.matNombre);
    
  }

  hayRegistros() {
    if (this.materias == null) {
      return false;
    } else {
      return true;
    }
  }
  hayRegistrosHorarios() {
    if (this.horarios == null) {
      return false;
    } else {
      return true;
    }
  }

  hayRegistrosHorariosXM() {
    if (this.horariosxm == null) {
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
    this.salonesselect = [{value: '', viewValue: ''}];
    this.profesoresselect = [{value: '', viewValue: ''}];

    for (const profe of this.profesores) {
      this.profesoresselect.push({value: profe[0], viewValue: profe[1]});
    }

    for (const salon of this.salones) {
      this.salonesselect.push({value: salon[0], viewValue: salon[1]});
    }

    this.profesoresselect.shift();
    this.salonesselect.shift();
  }

/*
  onNuevaMateria(){
    this.openDialog();
  }

  openDialog():void{
    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  } */

  verificarHorarioLibre(){
    let idHorario = this.selectedDia+this.selectedHora+this.selectedSalon;
    var crear=true;
    console.log("Como quedaría: "+idHorario);
    for (const horario of this.horarios) {
      
      if (horario[0]!=(this.selectedDia+this.selectedHora+this.selectedSalon)) {
        //console.log("No es Igual a: "+horario[0]);
      } else {
        //console.log("Si es Igual: "+this.selectedDia+this.selectedHora+this.selectedSalon);
        crear=false;
      }
    }

    if(crear){
      
      this.horario = {hId: idHorario, hDia: this.selectedDia, hHora: this.selectedHora, hMateria: this.materia.matNombre, hSalon: this.selectedSalon}
      //console.log("Horario: "+this.horario);
      //console.log("Materia: "+this.materia);
      this.crearHorario();
      this.obtenerHorariosXM(this.materia.matNombre);
      //this.hayRegistrosHorariosXM();
    } else {
      alert("ERROR: El Horario: "+idHorario+" está ocupado");
      console.log("No se creó Horario: "+idHorario+" porque está ocupado");
    }
  
  }

  verificarMateria(){
    let idHorario = this.selectedDia+this.selectedHora+this.selectedSalon;
    var crear=true;
    console.log("Crear Materia con nombre: "+this.materia.matNombre);
    for (const materia of this.materias) {
      
      if (materia[1]!=this.materia.matNombre) {
        //console.log("No es Igual a: "+materia[1]);
      } else {
        //console.log("Si es Igual: "+materia[1]);
        crear=false;
      }
    }
    if(crear){
      this.crearMateria();
    } else {
      alert("ERROR: La Materia con Nombre: "+this.materia.matNombre+" ya está creada");
      console.log("No se creó Materia con nombre: "+this.materia.matNombre+" porque ya existe");
    }
    
  }


}
