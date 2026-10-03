import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [FormsModule],
  styleUrl: './zodiaco.css',
  templateUrl: './zodiaco.html'
})
export class Zodiaco {

  nombre: string = '';
  apaterno: string = '';
  amaterno: string = '';

  dia: number = 0;
  mes: number = 0;
  anio: number = 0;
  sexo: string = '';

  edad: number = 0;
  signo: string = '';
  imagen: string = '';

  imprimir(): void {

    let fecha = new Date();

    let anioActual = fecha.getFullYear();
    let mesActual = fecha.getMonth() + 1;
    let diaActual = fecha.getDate();

    this.edad = anioActual - this.anio;

    if (this.mes > mesActual) {
      this.edad--;
    }
    if (this.mes == mesActual && this.dia > diaActual) {
      this.edad--;
    }
    let resultado = this.anio % 12;
    if (resultado == 4) {
      this.signo = 'Rata';
      this.imagen = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f400.png';
    }
    else if (resultado == 5) {
      this.signo = 'Buey';
      this.imagen = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f402.png';
    }
    else if (resultado == 6) {
      this.signo = 'Tigre';
      this.imagen = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f405.png';
    }
    else if (resultado == 7) {
      this.signo = 'Conejo';
      this.imagen = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f407.png';
    }
    else if (resultado == 8) {
      this.signo = 'Dragón';
      this.imagen = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f409.png';
    }
    else if (resultado == 9) {
      this.signo = 'Serpiente';
      this.imagen = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f40d.png';
    }
    else if (resultado == 10) {
      this.signo = 'Caballo';
      this.imagen = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f40e.png';
    }
    else if (resultado == 11) {
      this.signo = 'Cabra';
      this.imagen = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f410.png';
    }
    else if (resultado == 0) {
      this.signo = 'Mono';
      this.imagen = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f412.png';
    }
    else if (resultado == 1) {
      this.signo = 'Gallo';
      this.imagen = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f413.png';
    }
    else if (resultado == 2) {
      this.signo = 'Perro';
      this.imagen = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f415.png';
    }
    else if (resultado == 3) {
      this.signo = 'Cerdo';
      this.imagen = 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/72x72/1f416.png';
    }
  }
}