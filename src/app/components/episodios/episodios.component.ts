import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { personajesService } from '../personajes/service/personajes.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrl: './episodios.component.css'
})
export class EpisodiosComponent implements OnInit{

  

  constructor(private router: Router,
              private apiService: personajesService) {}

  ngOnInit(): void {
    
  }
  
  Episodios(){
    this.router.navigate(['/Episodios'])
  }
  Locaciones(){
    this.router.navigate(['/Locaciones'])
  }

  Personajes(){
  this.router.navigate(['/Personajes'])
  }

}
