import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MateriaComponent } from './components/materias/materia/materia.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  //{ path: 'materias', loadChildren: () => import('./components/materias/listamaterias/listamaterias.module').then(m => m.ListamateriasModule) },
  { path: 'materia/:id', component: MateriaComponent },
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule) },
  { path: 'listamaterias', loadChildren: () => import('./components/materias/listamaterias/listamaterias.module').then(m => m.ListamateriasModule) },
  { path: 'horariosalon', loadChildren: () => import('./components/horarios/horariosalon/horariosalon.module').then(m => m.HorariosalonModule) },
  { path: 'horariodia', loadChildren: () => import('./components/horarios/horariodia/horariodia.module').then(m => m.HorariodiaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
