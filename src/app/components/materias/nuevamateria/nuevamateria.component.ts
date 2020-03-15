import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MateriaI } from '../../../shared/models/materia.interface';
import { MateriasService } from '../../materias/materias.service';

@Component({
  selector: 'app-nuevamateria',
  templateUrl: './nuevamateria.component.html',
  styleUrls: ['./nuevamateria.component.css']
})
export class NuevamateriaComponent implements OnInit {

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

  constructor(private MateriasService: MateriasService) { }

  public nuevaMateriaForm = new FormGroup({
    matNombre: new FormControl('', Validators.required),
    matDetalles: new FormControl('', Validators.required),
    matPrograma: new FormControl('', Validators.required),
    matCupo: new FormControl('', Validators.required),
    matSemestre: new FormControl('', Validators.required),
    matProfesores: new FormControl('', Validators.required)
  });


  ngOnInit() {
  }
/*
  addNewMateria(data: PostI) {
    console.log('New post', data);
    this.postSvc.preAddAndUpdatePost(data, this.image);
  }*/

  obtenerMaterias() {
    this.MateriasService.obtenerMaterias()
    .subscribe(
      result => this.materias = result
    );
  }

  addNewMateria() {
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

}
