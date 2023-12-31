import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Characters } from 'src/app/models/characters.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {

  characterId: number = 1;
  character: Characters = new Characters;

  constructor(private characterService: CharactersService, private route: ActivatedRoute, private router: Router){}

  // Recogemos la id como parametro y accedemos al database.json utilizando la id
  ngOnInit(): void{      
    // Con el this.route.params accedemos al componente padre y de alli recogeriamos la id para pasarla al siguiente método
    this.route.params.subscribe(params => {
      this.characterId = params ['id'];
    });
    // Utilizando el metodo getById del servicio recogemos la id para mostrarlo.
    this.characterService.getById(this.characterId).subscribe(result => {
      this.character = result;
    });
  }

  // Utilizando el metodo delete del servicio recogemos la id para eliminarlo de la base de datos y redireccionar al usuario a la lista de personajes
  deleteCharacter(): void{
    this.characterService.delete(this.characterId).subscribe( result => {
      this.router.navigate(['/character-list']);
    });
  }
}
