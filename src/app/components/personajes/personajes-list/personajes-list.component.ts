import { Component, OnInit } from '@angular/core';
import { personajesService } from '../service/personajes.service';
import { take } from 'rxjs/operators';
import { personajes } from '@app/components/interfaces/personajes.interfaces';

type RequestInfo = {
  next:null;
};
@Component({
  selector: 'app-personajes-list',
  templateUrl: './personajes-list.component.html',
  styleUrl: './personajes-list.component.css'
})
export class PersonajesListComponent implements OnInit {
  personajess: personajes[] = [];
  info:RequestInfo = {
    next: null
  }
  private pageNum = 1;
  private query!: string;
  

  constructor(private personajesSvc: personajesService){}
  ngOnInit(): void {
    this.getDataFromService();
  }
  
  private getDataFromService ():void{
    this.personajesSvc.searchPersonajes(this.query, this.pageNum)
    .pipe(take(1)).subscribe( (res:any) => {
      console.log('response ->', res);

      const{info, results} = res;
      this.personajess = [...this.personajess, ...results];
      this.info = info;
    })
  }
}
