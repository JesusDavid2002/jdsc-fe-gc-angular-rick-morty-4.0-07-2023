import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  usuario: string = '';
  password: string = '';
  passwordValidation: string = '';

  nuevoUsuario: any = [];

  validarUsuario(){
    if (this.password === this.passwordValidation){
      this.crearUsuario();
    }else{
      alert('Las contraseñas son diferentes');
    }
  }

  crearUsuario(){
    let usuarios = {
      'usuario': this.usuario,      
      'password': this.password
    }
    this.nuevoUsuario.push(usuarios);
  }
}
