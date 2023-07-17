import { Component } from '@angular/core';
import { PaginaService } from 'src/app/services/pagina.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent{
  characters: any = null;
  arrayChar: any = [];

  constructor(private paginaService: PaginaService){}

  // Vamos creando id aleatorias entre 1 y 700 para luego pasarlas al arrayChar
  random(){
      for (let i = 0; i < 8; i++) {
      let randomCharacters = (Math.floor(Math.random()*700)+1);
      this.arrayChar.push(`,${randomCharacters}`);
    }
    return this.arrayChar;
  }
  
  // Posteriormente utilizamos el método anterior para ir pasando las ids y asi mostrar los personajes que correspondan con la id
  ngOnInit(){
    this.paginaService.returnCharacters(this.random())
      .subscribe( result => this.characters = result)
      
  }
}
