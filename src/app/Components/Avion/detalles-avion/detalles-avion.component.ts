import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AvionesService } from '../../../Services/aviones.service';
import { AlertasService } from '../../../Services/alertas.service';

@Component({
  selector: 'app-detalles-avion',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalles-avion.component.html',
  styleUrl: './detalles-avion.component.scss'
})
export class DetallesAvionComponent {
  data: any
  id: any
  constructor(private sA: AvionesService, private aR: ActivatedRoute, private alert: AlertasService) {
    this.id = this.aR.snapshot.paramMap.get('id');
    this.getDataById();
  }
 getDataById(): void {
    this.sA.getDato(this.id).then((data) => {
      this.data = data;
      console.log(data);
    }, (error) => {
      this.alert.alertaError('No se encontro el dato');
      
    });
  }


}
