import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodiosComponent } from './components/episodios/episodios.component';
import { LocacionesComponent } from './components/locaciones/locaciones.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { PersonajesDetailsComponent } from './components/personajes/personajes-details/personajes-details.component';
import { PersonajesListComponent } from './components/personajes/personajes-list/personajes-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/Personajes', pathMatch: 'full' },
  { path: 'Personajes', component: PersonajesComponent },
  { path: 'Episodios', component: EpisodiosComponent },
  { path: 'Locaciones', component: LocacionesComponent },
  { path: 'personajes-details/:id', component: PersonajesDetailsComponent},
  { path: 'personajes-list', component: PersonajesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
