import { Injectable } from '@angular/core';
import { IService } from '../Models/iService';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { AlertasService } from './alertas.service';

@Injectable({
  providedIn: 'root'
})
export class PilotosService implements IService {
  url= environment.apiUrl + '/pilotos';

  constructor(private http: HttpClient, private alet: AlertasService) { }
  getDatos(): Promise<any> {
    return this.http.get(this.url).toPromise();
  }
  getDato(id: string): Promise<any> {
    return this.http.get(this.url + '/' + id).toPromise();
  }
  createDato(data: any): void {
    this.http.post(this.url, data).subscribe((data) => {
      this.alet.alertaSuccess('/pilotos','Piloto creado');
    }, (err) => {
      this.alet.alertaError('Error al crear el piloto');
    });
    
  }
  updateDato(dto: any): void {
    this.http.put(this.url, dto).subscribe((data) => {
      this.alet.alertaSuccess('/pilotos','Piloto actualizado');
    }, (err) => {
      this.alet.alertaError('Error al actualizar el piloto');
    });
  }
  deleteDato(id: string): Promise<any> {
    return this.http.delete(this.url + '/' + id).toPromise();
  }
}
