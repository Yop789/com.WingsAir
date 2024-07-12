import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PilotosService } from '../../../Services/pilotos.service';
import { Piloto, PilotoId } from '../../../Models/piloto';

@Component({
  selector: 'app-agregar-pilotos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './agregar-pilotos.component.html',
  styleUrl: './agregar-pilotos.component.scss'
})
export class AgregarPilotosComponent {
  submitted = false;

  tipo = ['H', 'M'];

  @ViewChild('codigoPiloto') codigoPiloto!: ElementRef;
  @ViewChild('nombreCompleto') nombreCompleto!: ElementRef;
  @ViewChild('sexo') sexo!: ElementRef;

  constructor(private sP: PilotosService) {}

  guardar() {
    this.submitted = true;
    
    if (
      !this.codigoPiloto.nativeElement.value ||
      !this.nombreCompleto.nativeElement.value ||
      this.sexo.nativeElement.value === '-----Selecciona un genero-----'
    ) {
      return;
    }

    const dbt: Piloto = {
      codigoPiloto: "PA-" + this.codigoPiloto.nativeElement.value,
      nombreCompleto: this.nombreCompleto.nativeElement.value,
      sexo: this.sexo.nativeElement.value,
      horasVuelo: '00:00'
    };

    console.log(dbt);
    this.sP.createDato(dbt); // Usar dbt en lugar de this.data
  }
}
