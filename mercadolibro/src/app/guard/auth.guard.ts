/*import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from '../services/login.service';  // Asegúrate de que la ruta es correcta

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(): Observable<boolean> {
    return this.loginService.isAuthenticated().pipe(
      map(isAuthenticated => {
        if (isAuthenticated) {
          return true;
        } else {
          //redirijo al login si no esta autenticado
          this.router.navigate(['/inicio']);
          return false;
        }
      })
    );
  }
}*/
