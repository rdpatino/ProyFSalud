import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class HorariossalonService {

  private URL = 'http://localhost/apiProyFSalud/';

  constructor(private http: HttpClient) { }

  obtenerHorarios() {
    return this.http.get(this.URL + `ObtenerHorarios.php`);
  }
  obtenerSalones() {
    return this.http.get(this.URL + `ObtenerSalones.php`);
  }
  /*
  ObtenerHorariosXM(hMateria: string) {
    return this.http.get(this.URL + `BuscarHorariosXM.php?hMateria=${hMateria}`);
  } */
  
/*
  crearHorario(horario) {
    return this.http.post(this.URL + `CrearMateria.php`, JSON.stringify(horario));
  }

  borrarHorario(hId: number) {
    return this.http.get(this.URL + `BorrarMateria.php?matId=${hId}`);
  }

  buscarHorario(hId: number) {
    return this.http.get(this.URL + `BuscarMateria.php?matId=${hId}`);
  }

  editarHorario(horario) {
    return this.http.put(this.URL + `EditarMateria.php`, JSON.stringify(horario));
  }
*/
}
