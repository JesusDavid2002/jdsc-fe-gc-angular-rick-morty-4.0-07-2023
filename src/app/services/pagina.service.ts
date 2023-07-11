import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaginaService {

  constructor(private http: HttpClient) {}

  // Creamos un métodos para ir recogiendo el personaje de la api correspondiente
  returnCharacters(id: any){
    let url = this.http.get("https://rickandmortyapi.com/api/character/" + `${id}`);
    return url;
  }
}
