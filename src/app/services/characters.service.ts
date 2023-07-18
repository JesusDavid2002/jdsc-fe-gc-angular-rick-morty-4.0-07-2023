import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Characters } from '../models/characters.model';
import { Observable } from 'rxjs';

let baseUrl = "http://localhost:3000/characters";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  // Devuelve todos los personajes
  getAll(): Observable<Characters[]>{
    return this.http.get<Characters[]>(baseUrl);
  }

  // Devuelve el personaje correspondiente a la id
  getById(id: number): Observable<Characters>{
    return this.http.get<Characters>(`${baseUrl}/${id}`);
  }

  // Crea un personaje nuevo
  create(character: Characters): Observable<any>{
    return this.http.post(baseUrl, character);
  }

  // Modifica un personaje
  update(id: number, character: Characters): Observable<any>{
    return this.http.patch(`${baseUrl}/${id}`,character);
  }

  // Borra un personaje
  delete(id: number): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }

  // Borra todos los personajes
  deleteAll(): Observable<any>{    
    return this.http.delete(baseUrl);
  }

  // Filta y recoge todos los personajes con el mismo nombre
  findByName(name: any): Observable<Characters[]>{
    return this.http.get<Characters[]>(`${baseUrl}?name=${name}`);
  }
}
