import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FooterComponent } from './shared/footer/footer.component';
import { QuienesComponent } from './pages/quienes/quienes.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NavComponent } from './shared/nav/nav.component';
import { CategoriaComponent } from './pages/nuestraseleccion/categoria/categoria.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    ContactoComponent, 
    FooterComponent, 
    QuienesComponent, 
    NavComponent, 
    LandingComponent, 
    CategoriaComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mercado Libro';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (!this.authService.isAuthenticated()) {
          this.authService.logout();
        }
      }
    });
  }
}
