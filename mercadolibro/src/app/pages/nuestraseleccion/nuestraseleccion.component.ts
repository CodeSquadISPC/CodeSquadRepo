import { Component, OnInit } from '@angular/core';
import { NuestraseleccionCarruselComponent } from './nuestraseleccion-carrusel/nuestraseleccion-carrusel.component';
import { CommonModule } from '@angular/common';
import { BookService } from './book.service';
import { Book } from './book.interface';

@Component({
  selector: 'app-nuestraseleccion',
  standalone: true,
  imports: [NuestraseleccionCarruselComponent, CommonModule],
  templateUrl: './nuestraseleccion.component.html',
  styleUrl: './nuestraseleccion.component.css'
})
export class NuestraseleccionComponent implements OnInit {

  title = 'Mercado Libro';
  books: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe(
      (data: Book[]) => {
        this.books = data;
      },
      (error) => {
        console.error('Error al obtener los libros:', error);
      }
    );
  }
}
