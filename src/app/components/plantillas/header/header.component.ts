import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    constructor(private router: Router){

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
