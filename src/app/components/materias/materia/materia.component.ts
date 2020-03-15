import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MateriasService } from '../materias.service';
import { HorariossalonService } from '../../horarios/horariossalon.service';

export interface HorarioXM {
  id: string;
  dia: string;
  hora: string;
  materia: string;
  salon: string;
}

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

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
  horariosxm: HorarioXM[];
/*
  public materia: {
    id: string;
    nombre: string;
    contenido: string
  } = {
    id: '1',
    nombre: 'Materia 1',
    contenido: 'Contenido materia 1'
  };
  */

  constructor(private MateriasService: MateriasService, private HorariossalonService: HorariossalonService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.obtenerMaterias();
    this.obtenerHorarios();
  }

  obtenerMaterias() {
    this.MateriasService.obtenerMaterias()
    .subscribe(
      result => this.materias = result
    );
  }

  hayRegistros() {
    if (this.materias == null) {
      return false;
    } else {
        for (const materia of this.materias) {
              if (materia[0]==this.route.snapshot.params.id){
                this.materia = materia;
                this.materia.matId = this.route.snapshot.params.id;
                return true;
              }
            }
        return true;
    }
  }

  obtenerHorarios() {
    this.HorariossalonService.obtenerHorarios()
    .subscribe(
      result => this.horarios = result
    );
  }

  hayRegistrosHorariosXM() {
    if (this.horariosxm == null) {
      return false;
    } else {
      return true;
    }
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

}
