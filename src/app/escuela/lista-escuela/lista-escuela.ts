import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Alumno } from '../alumno';

@Component({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-lista-escuela',
  styleUrl: './lista-escuela.css',
  templateUrl: './lista-escuela.html',
})
export class ListaEscuela {

  formulario!: FormGroup;

  alumnos: Alumno[] = [];

  indiceEditar: number = -1;

  nuevoAlumno: Alumno = {
    matricula: '',
    nombre: '',
    correo: '',
    materia: ''
  };

  ngOnInit(): void {

    this.formulario = new FormGroup({
      matricula: new FormControl(''),
      nombre: new FormControl(''),
      correo: new FormControl(''),
      materia: new FormControl('')
    });

    this.cargarAlumnos();

  }

  muestraAlumno(): void {

    this.nuevoAlumno.matricula = this.formulario.value.matricula;
    this.nuevoAlumno.nombre = this.formulario.value.nombre;
    this.nuevoAlumno.correo = this.formulario.value.correo;
    this.nuevoAlumno.materia = this.formulario.value.materia;

    this.agregarAlumno();

  }

  agregarAlumno(): void {

    if (
      this.nuevoAlumno.matricula === '' ||
      this.nuevoAlumno.nombre === '' ||
      this.nuevoAlumno.correo === '' ||
      this.nuevoAlumno.materia === ''
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (this.indiceEditar == -1) {

      this.alumnos.push({
        matricula: this.nuevoAlumno.matricula,
        nombre: this.nuevoAlumno.nombre,
        correo: this.nuevoAlumno.correo,
        materia: this.nuevoAlumno.materia
      });

    } else {

      this.alumnos[this.indiceEditar] = {
        matricula: this.nuevoAlumno.matricula,
        nombre: this.nuevoAlumno.nombre,
        correo: this.nuevoAlumno.correo,
        materia: this.nuevoAlumno.materia
      };

      this.indiceEditar = -1;

    }

    localStorage.setItem(
      'alumnos',
      JSON.stringify(this.alumnos)
    );

    this.formulario.setValue({
      matricula: '',
      nombre: '',
      correo: '',
      materia: ''
    });

    this.nuevoAlumno = {
      matricula: '',
      nombre: '',
      correo: '',
      materia: ''
    };

  }

  cargarAlumnos(): void {

    const datos = localStorage.getItem('alumnos');

    if (datos) {
      this.alumnos = JSON.parse(datos);
    } else {
      this.alumnos = [];
    }

  }

  editarAlumno(i: number): void {

    this.formulario.setValue({
      matricula: this.alumnos[i].matricula,
      nombre: this.alumnos[i].nombre,
      correo: this.alumnos[i].correo,
      materia: this.alumnos[i].materia
    });

    this.indiceEditar = i;

  }

  eliminarAlumno(i: number): void {

  this.alumnos.splice(i, 1);

  localStorage.setItem(
    'alumnos',
    JSON.stringify(this.alumnos)
  );

  if (this.indiceEditar != -1) {
    this.indiceEditar = -1;
  }

}
}