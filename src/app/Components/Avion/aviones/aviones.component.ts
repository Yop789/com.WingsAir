import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvionesService } from '../../../Services/aviones.service';
import { AlertasService } from '../../../Services/alertas.service';

@Component({
  selector: 'app-aviones',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './aviones.component.html',
  styleUrl: './aviones.component.scss',
})
export class AvionesComponent {
  data: any;

  constructor(private sA: AvionesService, private alet: AlertasService) {
    this.getDta();
  }

  getDta(): void {
    this.sA.getDatos().then((data) => {
      this.data = data;
    });
  }

  delete(id: string): void {
    this.sA.deleteDato(id).then(
      (data) => {
        this.alet.alertaInfo('Avion eliminado con exito');
        this.getDta();
      },
      (err) => {
        this.alet.alertaError('Error al eliminar el avion');
      }
    );
  }
}
