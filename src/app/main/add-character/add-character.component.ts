import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Characters } from 'src/app/models/characters.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  character: Characters = new Characters();

  constructor(private characterService: CharactersService, private router: Router){}

  // Utilizando el metodo create del servicio para crear un nuevo personaje.
  createCharacter(): void{
    this.characterService.create(this.character).subscribe();
    this.router.navigateByUrl("/character-list");
  }
}
