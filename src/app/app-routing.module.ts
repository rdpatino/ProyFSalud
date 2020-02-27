import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MateriaComponent } from './components/materias/materia/materia.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  //{ path: 'materias', loadChildren: () => import('./components/materias/listamaterias/listamaterias.module').then(m => m.ListamateriasModule) },
  { path: 'materia/:id', component: MateriaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
