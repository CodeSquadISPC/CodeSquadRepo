import { Component } from '@angular/core';
import { NuestraseleccionCarruselComponent } from './nuestraseleccion-carrusel/nuestraseleccion-carrusel.component';
// import { CategoriaComponent } from './categoria/categoria.component'; (agregar el componente en imports mas abajo)

@Component({
  selector: 'app-nuestraseleccion',
  standalone: true,
  imports: [NuestraseleccionCarruselComponent],
  templateUrl: './nuestraseleccion.component.html',
  styleUrl: './nuestraseleccion.component.css'
})
export class NuestraseleccionComponent {

}

