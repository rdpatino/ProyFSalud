import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  public materia: {
    id: string;
    nombre: string;
    contenido: string
  } = {
    id: '1',
    nombre: 'Materia 1',
    contenido: 'Contenido materia 1'
  };

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.materia.id = this.route.snapshot.params.id;
  }

}
