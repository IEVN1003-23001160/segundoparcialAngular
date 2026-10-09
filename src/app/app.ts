import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Zodiaco } from './formulario/zodiaco/zodiaco';
import { Navbar } from './navbar/navbar';
import { Distancia } from './formulario/distancia/distancia'; 
import { ListaEscuela } from './escuela/lista-escuela/lista-escuela';


@Component({
  imports: [RouterOutlet, Navbar, Distancia, ListaEscuela],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('segundoparcialAngular');
  ngOnInit(): void {
    initFlowbite();
  }
}
