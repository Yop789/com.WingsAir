import { Component, ElementRef, ViewChild } from '@angular/core';
import { AvionesService } from '../../../Services/aviones.service';
import { Avion, Avionid } from '../../../Models/avion';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlertasService } from '../../../Services/alertas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-actualizar-avion',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './actualizar-avion.component.html',
  styleUrl: './actualizar-avion.component.scss',
})
export class ActualizarAvionComponent {
  submitted = false;

  tipo: any;
  id: any;
  data: any;

  @ViewChild('codigoAvion') codigoAvion!: ElementRef;

  @ViewChild('tipoAvion') tipoAvion!: ElementRef;

  @ViewChild('capacidadPasajero') capacidadPasajero!: ElementRef;

  constructor(
    private sA: AvionesService,
    private aR: ActivatedRoute,
    private alert: AlertasService
  ) {
    this.id = this.aR.snapshot.paramMap.get('id');
    this.getDtBD();
  }

  getDtBD(): void {
    this.getDtaTipos();
    setTimeout(() => {
      this.getDataById();
    }, 1000);
  }
  guardar(): void {
    this.submitted = true;
    if (
      this.codigoAvion.nativeElement.value &&
      this.capacidadPasajero.nativeElement.value
    ) {
      const dta: Avionid = {
        id: this.id,
        codigoAvion: this.codigoAvion.nativeElement.value,
        tipoAvion: this.tipoAvion.nativeElement.value,
        horasVuelo: '15:30',
        capacidadPasajeros: Number(this.capacidadPasajero.nativeElement.value),
      };

      this.sA.updateDato(dta);
    }
  }

  getDtaTipos(): void {
    this.sA.getTipos().then((resp) => {
      this.tipo = resp;
    });
  }

  getDataById(): void {
    this.sA.getDato(this.id).then(
      (rep) => {
        this.data = rep;
        console.log(rep);
        this.data = rep;
        this.capacidadPasajero.nativeElement.value = rep.capacidadPasajeros;

        this.codigoAvion.nativeElement.value = rep.codigoAvion;
        this.tipoAvion.nativeElement.value = rep.tipoAvion;
      },
      (error) => {
        this.alert.alertaError('No se encontro el dato');
      }
    );
  }
}
