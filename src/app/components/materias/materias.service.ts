import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  private URL = 'http://localhost/apiProyFSalud/';

  constructor(private http: HttpClient) { }

  obtenerMaterias() {
    return this.http.get(this.URL + `ObtenerMaterias.php`);
  }
  obtenerProfesores() {
    return this.http.get(this.URL + `ObtenerProfesores.php`);
  }
  obtenerSalones() {
    return this.http.get(this.URL + `ObtenerSalones.php`);
  }

  // Materias

  crearMateria(materia) {
    return this.http.post(this.URL + `CrearMateria.php`, JSON.stringify(materia));
  }
  borrarMateria(matId: number) {
    return this.http.get(this.URL + `BorrarMateria.php?matId=${matId}`);
  }
  buscarMateria(matId: number) {
    return this.http.get(this.URL + `BuscarMateria.php?matId=${matId}`);
  }
  editarMateria(materia) {
    return this.http.put(this.URL + `EditarMateria.php`, JSON.stringify(materia));
  }

  // Profesores

  crearProfesor(profesor) {
    return this.http.post(this.URL + `CrearProfesor.php`, JSON.stringify(profesor));
  }
  borrarProfesor(pId: string) {
    return this.http.get(this.URL + `BorrarProfesor.php?pId=${pId}`);
  }
  buscarProfesor(pId: string) {
    return this.http.get(this.URL + `BuscarProfesor.php?pId=${pId}`);
  }
  editarProfesor(profesor) {
    return this.http.put(this.URL + `EditarProfesor.php`, JSON.stringify(profesor));
  }

  // Salones

  crearSalon(salon) {
    return this.http.post(this.URL + `CrearSalon.php`, JSON.stringify(salon));
  }
  borrarSalon(sId: string) {
    return this.http.get(this.URL + `BorrarSalon.php?sId=${sId}`);
  }
  buscarSalon(sId: string) {
    return this.http.get(this.URL + `BuscarSalon.php?sId=${sId}`);
  }
  editarSalon(salon) {
    return this.http.put(this.URL + `EditarSalon.php`, JSON.stringify(salon));
  }


  editarCambioHorario(materia) {
    return this.http.put(this.URL + `EditarCambioHorario.php`, JSON.stringify(materia));
  }

}
