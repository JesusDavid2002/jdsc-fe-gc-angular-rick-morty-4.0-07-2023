import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Characters } from 'src/app/models/characters.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit{
  
  characterArray: Characters[] = [];

  constructor(private characterService: CharactersService, private route: ActivatedRoute){}
  
  // Posteriormente utilizamos el método anterior para ir pasando las ids y asi mostrar los personajes que correspondan con la id
  ngOnInit(): void{
    //Utilizando el getAll del servicio llamamos a todas las instancias de la base de datos.
    this.characterService.getAll().subscribe(result =>{
      this.characterArray = result;
    });
  }
}
