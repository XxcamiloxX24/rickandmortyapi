import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-locaciones',
  templateUrl: './locaciones.component.html',
  styleUrl: './locaciones.component.css'
})
export class LocacionesComponent implements OnInit{

  constructor(private router: Router) {}

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
