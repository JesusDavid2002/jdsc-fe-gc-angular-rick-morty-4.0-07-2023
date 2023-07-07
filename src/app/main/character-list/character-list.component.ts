import { Component } from '@angular/core';
import datos from 'src/assets/database.json'

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent{
  datosArray: any[] = datos.characters;
}
