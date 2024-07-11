import { environment } from './../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IService } from '../Models/aviones-service';
import { AlertasService } from './alertas.service';

@Injectable({
  providedIn: 'root',
})
export class AvionesService implements IService {
  url = environment.apiUrl + '/aviones';
  constructor(private http: HttpClient, private alet: AlertasService) {}
  getDatos(): Promise<any> {
    return this.http.get(this.url).toPromise();
  }
  getDato(id: string): Promise<any> {
    return this.http.get(this.url + '/' + id).toPromise();
  }
  createDato(avion: any): void {
    this.http.post(this.url, avion).subscribe(
      (data) => {
        if (data) {
          this.alet.alertaSuccess('/aviones', 'Avion creado con exito');
        }
      },
      (err) => {
        this.alet.alertaError('Error al crear el avion');
      }
    );
  }
  updateDato(dto: any): void {
    this.http.put(this.url, dto).subscribe(
      (data) => {
        if (data) {
          this.alet.alertaSuccess('/aviones', 'Avion actualizado con exito');
        }
      },
      (err) => {
        this.alet.alertaError('Error al actualizar el avion');
      }
    );
  }
  deleteDato(id: string): Promise<any> {
    return this.http.delete(this.url + '/' + id).toPromise();
  }

  getTipos() {
    return this.http.get(this.url + '/tipos').toPromise();
  }
}
