import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AlumnosUtl } from '../alumnosUTL';
import { ProyectoapiService } from '../alumnosapi.service';

@Component({
  selector: 'app-agregar',
  imports: [FormsModule, CommonModule],
  templateUrl: './agregar.html',
  styleUrl: './agregar.css'
})

export class Agregar {

  alumno: AlumnosUtl = {
    matricula: 0,
    nombre: '',
    apaterno: '',
    amaterno: '',
    correo: ''
  };

  constructor(
  private alumnosService: ProyectoapiService,
  public router: Router
) {}
  guardarAlumno(): void {

    this.alumnosService.agregarNuevoAlumno(this.alumno).subscribe({

      next: (response) => {

        console.log('Alumno registrado correctamente:', response);

        alert('Alumno registrado correctamente');

        this.router.navigate(['/utl/alumnos']);

      },

      error: (error) => {

        console.error('Error al registrar alumno:', error);

        alert('No se pudo registrar el alumno');

      }

    });

  }

}
