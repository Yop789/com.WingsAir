import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AvionesService } from '../../../Services/aviones.service';

@Component({
  selector: 'app-aviones',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './aviones.component.html',
  styleUrl: './aviones.component.scss',
})
export class AvionesComponent {
  data: any;

  constructor(private sA: AvionesService) {
    this.getDta();
  }

  getDta(): void {
    this.sA.getDatos().then((data) => {
      this.data = data;
    });
  }
}
