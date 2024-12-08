import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login(username: string, password: string): void {
    // Validación de credenciales
    if (username === 'lucas' && password === '123') {
      sessionStorage.setItem('authToken', 'ejemplo-de-token');  // Guardar token en sessionStorage
      sessionStorage.setItem('username', username);  // Guardar el nombre de usuario
      this.router.navigate(['/profile']);  // Redirigir a la página de perfil
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
