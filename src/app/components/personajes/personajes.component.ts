import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {Router} from '@angular/router';
import {debounceTime} from 'rxjs/operators';
import { personajesService } from './service/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent implements OnInit{

 

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
