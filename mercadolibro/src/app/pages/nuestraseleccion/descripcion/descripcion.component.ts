import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent {
  @Input() book!: {
    titulo: string;
    autor: string;
    categoria: string;
    descripcion: string;
    precio: number;
    stock: number;
  };

  constructor() {}
}
