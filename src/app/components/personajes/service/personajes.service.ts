import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { personajes } from '../../interfaces/personajes.interfaces';

import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class personajesService {
  
  constructor(private http: HttpClient) { }
  searchPersonajes(query='', page=1){
    const filter = `${environment.baseUrlAPI}/?name=${query}&page=${page}`;
    return this.http.get<personajes[]>(filter)
  }
  getDetails(id:number){
    return this.http.get<personajes>(`${environment.baseUrlAPI}/${id}`);
  }
}
