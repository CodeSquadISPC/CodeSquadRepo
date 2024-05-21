// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';  // Importa las rutas desde app.routes.ts

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),  // Usa las rutas definidas en app.routes.ts
  ],
  providers: [],
})
export class AppModule { }
