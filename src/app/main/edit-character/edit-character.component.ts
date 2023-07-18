import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Characters } from 'src/app/models/characters.model';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.css']
})
export class EditCharacterComponent {

  characterId: number = 1;
  character: Characters = new Characters;

  constructor(private characterService: CharactersService, private route: ActivatedRoute, private router: Router){}

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

  //Creamos un metodo para poder modificar los datos.
  modifyCharacter(): void{
    //Introducimos los datos que querramos modificar (1, algunos o todos) y se almacenarian en datosNuevos
    let datosNuevos = {
      name: this.character.name,
      status: this.character.status,
      species: this.character.species,
      gender: this.character.gender,
      origin: this.character.origin,
      location: this.character.location,
      image: this.character.image,
    };
    //Posteriormente utilizando el update del servicio hariamos un patch para actualizar los datos en las posiciones correspondientes.
    this.characterService.update(this.characterId, datosNuevos).subscribe( result => {
      this.router.navigate(['/character-list']);
    });
  }
}
