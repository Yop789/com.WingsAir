import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AeropuertosService } from '../../../Services/aeropuertos.service';

@Component({
  selector: 'app-aereopurtos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './aereopurtos.component.html',
  styleUrl: './aereopurtos.component.scss'
})
export class AereopurtosComponent {
  data: any;



  constructor(private sA: AeropuertosService) {
    this.getData();
  }

  getData(): void {
    this.sA.getDatos().then((data) => {
      this.data = data;
    });
  }
  delete(id: string): void {
    this.sA.deleteDato(id).then(() => {
      this.getData();
    });
  }

}
