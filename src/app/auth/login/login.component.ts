import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  usuarioLogged: any = [];

  inicarSesion(){
    let usuario = {
      'username': this.username,
      'password': this.password
    }
    this.usuarioLogged.push(usuario);
  }
}
