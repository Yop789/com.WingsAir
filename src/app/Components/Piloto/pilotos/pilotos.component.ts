import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PilotosService } from '../../../Services/pilotos.service';
import { AlertasService } from '../../../Services/alertas.service';

@Component({
  selector: 'app-pilotos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pilotos.component.html',
  styleUrl: './pilotos.component.scss'
})
export class PilotosComponent {
  data: any;
  constructor(private sP: PilotosService, private alert: AlertasService) {
    this.getData();
  }

  getDataDB(){
    this.getData();
  }

  getData(): void {
    this.sP.getDatos().then((data) => {
      this.data = data;
    }, (error) => {
      this.alert.alertaError('No se encontraron datos');
      
    });
    
  }
  delete(id: string): void {
    this.sP.deleteDato(id).then(() => {
      this.alert.alertaInfo('Se elimino correctamente');
      this.getData();
    }, (error) => {
      this.alert.alertaError('No se pudo eliminar');
      
    });
  }

}
