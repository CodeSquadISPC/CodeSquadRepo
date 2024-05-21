// src/app/components/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    // Simulación de autenticación exitosa
    localStorage.setItem('authToken', 'dummy-token-with-expiration');
    this.router.navigate(['/protected']);
  }
}
