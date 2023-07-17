import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginaService } from 'src/app/services/pagina.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent {
  
  characterId: string = '';
  character: any;

  constructor(private route: ActivatedRoute, private characterService: PaginaService){}
  
  // Recogemos la id del componente padre y se la pasamos al método getCharacterDetails y este a su vez a la api
  ngOnInit() {
    // Con el this.route.params accedemos al componente padre y de alli recogeriamos la id para pasarla al siguiente método
    this.route.params.subscribe(params => {
      this.characterId = params['id'];
      this.getCharacterDetails();
    });
  }
  
  // Recogemos los datos del personaje mediante en metodo returnCharacter para recoger la id del personaje y pasar los datos
  getCharacterDetails() {
    this.characterService.returnCharacters(this.characterId)
      .subscribe(
        (response) => {
          this.character = response;
      });
  }
}
