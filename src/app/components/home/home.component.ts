import { Component, OnInit } from '@angular/core';
import { MateriasService } from '../materias/materias.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
/*
  public materias: {
    id: string;
    nombre: string;
    contenido: string
  } [] = [
    {
      id: '1',
      nombre: 'Materia 1',
      contenido: 'contenido ... 1'},
    {
      id: '2',
      nombre: 'Materia 2',
      contenido: 'contenido ... 2'},
    {
      id: '3',
      nombre: 'Materia 3',
      contenido: 'contenido ... 3'}
  ]; */

  constructor(private MateriasService: MateriasService) { }

  ngOnInit() {
    this.obtenerMaterias();
  }

  obtenerMaterias() {
    this.MateriasService.obtenerMaterias()
    .subscribe(
      result => this.materias = result
    );
  }

}
