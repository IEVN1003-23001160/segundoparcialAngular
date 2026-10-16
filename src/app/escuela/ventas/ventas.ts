
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ventas',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './ventas.html',
  styleUrl: './ventas.css'
})
export class Ventas {

  formulario!: FormGroup;

  ventasGuardadas: any[] = [];

  totalVentas: number = 0;

  indiceEditar: number = -1;

  ngOnInit(): void {

    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      boletos: new FormControl(1),
      total: new FormControl(0)
    });

    this.cargarVentas();

  }

  cargarVentas(): void {

    const datos = localStorage.getItem('ventas');

    if (datos) {
      this.ventasGuardadas = JSON.parse(datos);
    } else {
      this.ventasGuardadas = [];
    }

    this.calcularTotal();

  }

  calcularTotal(): void {

    this.totalVentas = 0;

    for (let i = 0; i < this.ventasGuardadas.length; i++) {
      this.totalVentas = this.totalVentas + Number(this.ventasGuardadas[i].total);
    }

  }

  editarVenta(i: number): void {

    this.indiceEditar = i;

    this.formulario.setValue({
      nombre: this.ventasGuardadas[i].nombre,
      boletos: this.ventasGuardadas[i].boletos,
      total: this.ventasGuardadas[i].total
    });

  }

  guardarCambios(): void {

    if (this.indiceEditar != -1) {

      this.ventasGuardadas[this.indiceEditar].nombre = this.formulario.value.nombre;
      this.ventasGuardadas[this.indiceEditar].boletos = this.formulario.value.boletos;
      this.ventasGuardadas[this.indiceEditar].total = Number(this.formulario.value.total);

      localStorage.setItem(
        'ventas',
        JSON.stringify(this.ventasGuardadas)
      );

      this.indiceEditar = -1;

      this.formulario.reset({
        nombre: '',
        boletos: 1,
        total: 0
      });

      this.calcularTotal();

    }

  }

  eliminarVenta(i: number): void {

    this.ventasGuardadas.splice(i, 1);

    localStorage.setItem(
      'ventas',
      JSON.stringify(this.ventasGuardadas)
    );

    this.calcularTotal();

  }

}
