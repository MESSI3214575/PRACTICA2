import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';  
import { AuthGuard } from './auth.guard';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],  // Configura el RouterTestingModule
      providers: [AuthGuard]  // Asegúrate de incluir AuthGuard en los providers
    });

    // Inyecta las dependencias correctamente
    authGuard = TestBed.inject(AuthGuard);  // Inyecta AuthGuard
    router = TestBed.inject(Router);  // Inyecta Router
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should block access to the route if no token is in sessionStorage', () => {
    spyOn(router, 'navigate');  // Simula la navegación

    // Limpiar el sessionStorage para simular que no hay token
    sessionStorage.removeItem('authToken');

    // Crear un objeto simulado de ActivatedRouteSnapshot
    const mockRoute = {} as ActivatedRouteSnapshot;  // Simula un objeto vacío de ActivatedRouteSnapshot

    // Crear un objeto simulado de RouterStateSnapshot
    const mockState = {} as RouterStateSnapshot;  // Simula un objeto vacío de RouterStateSnapshot

    // Llama al método canActivate y pasa los objetos simulados
    const result = authGuard.canActivate(mockRoute, mockState);

    // Verifica que el acceso sea bloqueado
    expect(result).toBeFalse();  // Espera que se bloquee el acceso
    expect(router.navigate).toHaveBeenCalledWith(['/login']);  // Verifica que se haya redirigido a login
  });
});
