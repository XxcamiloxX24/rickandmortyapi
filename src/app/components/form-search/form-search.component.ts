import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-search',
  template: `<input 
  #inputSearch
  autofocus
  type="text"
  class="form-control-lg"
  placeholder="Buscar..."
  (keyup)="onSearch(inputSearch.value)">`,
  styles: ['input {width: 30%}'],
})
export class FormSearchComponent implements OnInit{
  constructor(private router: Router){}
  ngOnInit(): void {
    
  }
  onSearch(value: string){
    console.log('Buscar->', value)
    if(value && value.length > 3){
      this.router.navigate(['/personajes-list'], {
        queryParams: {q:value}
      })
    }
  }
}
