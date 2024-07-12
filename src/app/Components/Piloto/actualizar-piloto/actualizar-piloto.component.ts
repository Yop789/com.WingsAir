import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PilotosService } from '../../../Services/pilotos.service';
import { PilotoId } from '../../../Models/piloto';

@Component({
  selector: 'app-actualizar-piloto',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './actualizar-piloto.component.html',
  styleUrl: './actualizar-piloto.component.scss'
})
export class ActualizarPilotoComponent {
  data: any;

  submitted = false;

  tipo = ['H', 'M'];
  id: any;

  @ViewChild('codigoPiloto') codigoPiloto!: ElementRef;
  @ViewChild('nombreCompleto') nombreCompleto!: ElementRef;
  @ViewChild('sexo') sexo!: ElementRef;

  constructor(private sP: PilotosService, private aR:ActivatedRoute) {

    this.id = this.aR.snapshot.paramMap.get('id');
    setTimeout(() => {
      this.getDataById();
    }, 1000);
    
  }

  getDataDB(){
    this.getDataById();
  }
  
  guardar() { 
    this.submitted = true;
    
    if (
      !this.codigoPiloto.nativeElement.value ||
      !this.nombreCompleto.nativeElement.value ||
      this.sexo.nativeElement.value === '-----Selecciona un genero-----'
    ) {
      return;
    }

    const dbt: PilotoId = {
      codigoPiloto:  this.codigoPiloto.nativeElement.value,
      nombreCompleto: this.nombreCompleto.nativeElement.value,
      sexo: this.sexo.nativeElement.value,
      horasVuelo: '00:00',
      id: this.id
    };

    console.log(dbt);
    this.sP.updateDato(dbt); // Usar dbt en lugar de this.data
    }
  getDataById(): void {
    this.sP.getDato(this.id).then((res) => {
      this.data = res;
      console.log(res);
      this.nombreCompleto.nativeElement.value =res.nombreCompleto;
      this.sexo.nativeElement.value =res.sexo;
      this.codigoPiloto.nativeElement.value = res.codigoPiloto;
    });
  }

}
