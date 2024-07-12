import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alta-aereopuerto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './alta-aereopuerto.component.html',
  styleUrl: './alta-aereopuerto.component.scss'
})
export class AltaAereopuertoComponent {

  data: any;
  submitted = false;

  constructor() { }


  guardar(): void {
    console.log(this.data);
  }

}
