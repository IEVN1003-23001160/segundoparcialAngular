import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [ReactiveFormsModule, CommonModule],
  selector: 'app-cinepolis',
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
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

  ngOnInit(): void {

    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      compradores: new FormControl(1),
      tarjeta: new FormControl('no'),
      boletos: new FormControl(1),
    });

  }

  procesar(): void {
    this.nombre = this.formulario.value.nombre;
    this.compradores = this.formulario.value.compradores;
    this.tarjeta = this.formulario.value.tarjeta;
    this.boletos = this.formulario.value.boletos;
    this.subtotal = 0;
    this.descuento = 0;
    this.descuentoCineco = 0;
    this.total = 0;
    this.mensaje = '';
    this.mensajeDescuento = '';

    if (this.compradores < 1 || this.boletos < 1) {

      this.mensaje = 'Ingresa una cantidad valida de compradores y boletos.';
      return;

    }

    if (this.boletos > this.compradores * 7) {

      this.mensaje = 'Unicamente se permiten 7 boletos por comprador.';
      return;

    }

    this.subtotal = this.boletos * 12000;
    if (this.boletos > 5) {

      this.descuento = this.subtotal * 0.15;
      this.mensajeDescuento = 'Se aplico un descuento del 15%.';

    } else if (this.boletos >= 3) {

      this.descuento = this.subtotal * 0.10;
      this.mensajeDescuento = 'Se aplico un descuento del 10%.';

    } else {

      this.mensajeDescuento = 'No aplica descuento por cantidad de boletos.';

    }

    this.total = this.subtotal - this.descuento;
    if (this.tarjeta == 'si') {

      this.descuentoCineco = this.total * 0.10;
      this.total = this.total - this.descuentoCineco;

      this.mensajeDescuento = this.mensajeDescuento +
        ' Se aplico un descuento adicional del 10% por tarjeta Cineco.';

    }

  }

  salir(): void {
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