import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
  ];

  constructor() { }

  ngOnInit() {
  }

}
