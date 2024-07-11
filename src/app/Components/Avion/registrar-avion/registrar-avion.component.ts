import { Avion } from './../../../Models/avion';
import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvionesService } from '../../../Services/aviones.service';

@Component({
  selector: 'app-registrar-avion',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './registrar-avion.component.html',
  styleUrl: './registrar-avion.component.scss',
})
export class RegistrarAvionComponent {
  submitted = false;

  tipo: any;

  @ViewChild('codigoAvion') codigoAvion!: ElementRef;

  @ViewChild('tipoAvion') tipoAvion!: ElementRef;

  @ViewChild('horasVuelo') horasVuelo!: ElementRef;

  @ViewChild('capacidadPasajero') capacidadPasajero!: ElementRef;

  constructor(private sA: AvionesService) {
    this.getDtBD();
  }

  getDtBD(): void {
    this.getDtaTipos();
  }
  guardar(): void {
    this.submitted = true;
    if (
      this.codigoAvion.nativeElement.value &&
      this.capacidadPasajero.nativeElement.value
    ) {
      const dta: Avion = {
        codigoAvion: 'AV-' + this.codigoAvion.nativeElement.value,
        tipoAvion: this.tipoAvion.nativeElement.value,
        horasVuelo: '15:30',
        capacidadPasajeros: Number(this.capacidadPasajero.nativeElement.value),
      };
      console.log(dta);
      this.sA.createDato(dta);
    }
  }

  getDtaTipos(): void {
    this.sA.getTipos().then((data) => {
      this.tipo = data;
    });
  }
}
