import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MaestrosUTL } from '../maestrosUTL';
import { MaestrosapiService } from '../maestrosapi.service';

@Component({
  selector: 'app-agregar-maestro',
  imports: [FormsModule, CommonModule],
  templateUrl: './agregar.html',
  styleUrl: './agregar.css'
})
export class Agregar {
  maestro: MaestrosUTL = {
    idmaestro: 0,
    nombre: '',
    apaterno: '',
    amaterno: '',
    correo: ''
  };

  constructor(
    private maestrosService: MaestrosapiService,
    public router: Router
  ) {}

  guardarMaestro(): void {
    this.maestrosService.agregarNuevoMaestro(this.maestro).subscribe({
      next: (response) => {
        console.log('Maestro registrado correctamente:', response);
        alert('Maestro registrado correctamente');
        this.router.navigate(['/utl/maestros']);
      },
      error: (error) => {
        console.error('Error al registrar maestro:', error);
        alert('No se pudo registrar el maestro');
      }
    });
  }
}