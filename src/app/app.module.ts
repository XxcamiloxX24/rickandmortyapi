import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpisodiosComponent } from './components/episodios/episodios.component';
import { LocacionesComponent } from './components/locaciones/locaciones.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/plantillas/header/header.component';
import { FooterComponent } from './components/plantillas/footer/footer.component';
import { FormSearchComponent } from './components/form-search/form-search.component';
import { PersonajesDetailsComponent } from './components/personajes/personajes-details/personajes-details.component';
import { PersonajesListComponent } from './components/personajes/personajes-list/personajes-list.component';


@NgModule({
  declarations: [
    AppComponent,
    
    LocacionesComponent,
    PersonajesComponent,
    HeaderComponent,
    FooterComponent,
    FormSearchComponent,
    PersonajesDetailsComponent,
    PersonajesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
