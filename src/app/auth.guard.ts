import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const token = sessionStorage.getItem('authToken');
    
    if (token) {
      return true; // Permite el acceso a la ruta
    } else {
      this.router.navigate(['/login']); // Redirige al login si no hay token
      return false;
    }
  }
}
