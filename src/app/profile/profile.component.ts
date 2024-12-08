import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string = '';  // Para mostrar el nombre de usuario

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Verifica si el token está presente
    const token = sessionStorage.getItem('authToken');
    if (token) {
      // Si hay un token, muestra el perfil
      this.username = 'Lucas';  // Puedes personalizar esto según el nombre del usuario
    } else {
      // Si no hay token, redirige al login
      this.router.navigate(['/login']);
    }
  }
}
