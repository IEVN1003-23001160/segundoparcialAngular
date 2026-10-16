import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.html',
  styleUrl: './cinepolis.css'
})
export class Cinepolis {

  formulario!: FormGroup;

  nombre: string = '';
  compradores: number = 1;
  tarjeta: string = 'no';
  boletos: number = 1;

  subtotal: number = 0;
  descuento: number = 0;
  descuentoCineco: number = 0;
  total: number = 0;

  mensaje: string = '';
  mensajeDescuento: string = '';

  ventasGuardadas: any[] = [];

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      compradores: new FormControl(1),
      tarjeta: new FormControl('no'),
      boletos: new FormControl(1)
    });
  }

  procesar(): void {

    this.nombre = this.formulario.value.nombre;
    this.compradores = Number(this.formulario.value.compradores);
    this.tarjeta = this.formulario.value.tarjeta;
    this.boletos = Number(this.formulario.value.boletos);

    this.subtotal = 0;
    this.descuento = 0;
    this.descuentoCineco = 0;
    this.total = 0;
    this.mensaje = '';
    this.mensajeDescuento = '';

    if (
      this.nombre.trim() == '' ||
      this.compradores < 1 ||
      this.boletos < 1 ||
      this.boletos > this.compradores * 7 ||
      this.compradores % 1 != 0 ||
      this.boletos % 1 != 0
    ) {
      this.mensaje = 'Verifica los datos. Cada comprador puede comprar máximo 7 boletos.';
      return;
    }

    this.subtotal = this.boletos * 12000;

    if (this.boletos > 5) {
      this.descuento = this.subtotal * 0.15;
      this.mensajeDescuento = 'Se aplicó un descuento del 15%.';
    } else if (this.boletos >= 3) {
      this.descuento = this.subtotal * 0.10;
      this.mensajeDescuento = 'Se aplicó un descuento del 10%.';
    } else {
      this.descuento = 0;
      this.mensajeDescuento = 'No aplica descuento por boletos.';
    }

    this.total = this.subtotal - this.descuento;

    if (this.tarjeta == 'si') {
      this.descuentoCineco = this.total * 0.10;
      this.total = this.total - this.descuentoCineco;
      this.mensajeDescuento =
        this.mensajeDescuento + ' Se aplicó un 10% adicional con tarjeta Cineco.';
    }

    const datos = localStorage.getItem('ventas');

    if (datos) {
      this.ventasGuardadas = JSON.parse(datos);
    } else {
      this.ventasGuardadas = [];
    }

    this.ventasGuardadas.push({
      nombre: this.nombre,
      boletos: this.boletos,
      total: this.total
    });

    localStorage.setItem(
      'ventas',
      JSON.stringify(this.ventasGuardadas)
    );
  }

  salir(): void {
    this.formulario.reset({
      nombre: '',
      compradores: 1,
      tarjeta: 'no',
      boletos: 1
    });

    this.nombre = '';
    this.compradores = 1;
    this.tarjeta = 'no';
    this.boletos = 1;
    this.subtotal = 0;
    this.descuento = 0;
    this.descuentoCineco = 0;
    this.total = 0;
    this.mensaje = '';
    this.mensajeDescuento = '';
  }
}