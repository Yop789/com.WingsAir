import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PilotosService } from '../../../Services/pilotos.service';
import { AlertasService } from '../../../Services/alertas.service';

@Component({
  selector: 'app-detalle-piloto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-piloto.component.html',
  styleUrl: './detalle-piloto.component.scss'
})
export class DetallePilotoComponent {
data: any
id: any
constructor(private sP: PilotosService, private aR: ActivatedRoute, private alert: AlertasService) {
  this.id = this.aR.snapshot.paramMap.get('id');
  this.getDataById();
}

getDataById(): void {
  this.sP.getDato(this.id).then((data) => {
    this.data = data;
  }, (error) => {
    this.alert.alertaError('No se encontro el dato');
    
  });
}

}
