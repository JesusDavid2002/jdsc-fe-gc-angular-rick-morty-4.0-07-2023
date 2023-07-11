import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  usuario: string = '';
  email: string = '';
  password: string = '';
  passwordValid: string = '';

  nuevoUsuario: any = [];

  // Creamos un método para validar el usuario, si las 2 contraseña son iguales entonces crea el usuario
  validateUser(){
    if(this.password === this.passwordValid){
      this.createUser();
    }else{
      alert('Passwords are not equals');
    }
  }
  createUser(){
    let usuarios = {
      'usuario': this.usuario,  
      'email': this.email,    
      'password': this.password
    }
    this.nuevoUsuario.push(usuarios);
  }
}
