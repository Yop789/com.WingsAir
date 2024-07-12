import { Injectable } from '@angular/core';
import { IService } from '../Models/iService';
import { environment } from '../../environments/environment.development';
import { AlertasService } from './alertas.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AeropuertosService implements IService {

  url = environment.apiUrl + '/areopuertos';

  constructor(private http: HttpClient, private alet: AlertasService) { }
  getDatos(): Promise<any> {
    return this.http.get(this.url).toPromise();
    
  }
  getDato(id: string): Promise<any> {
    return this.http.get(this.url + '/' + id).toPromise();
  }
  createDato(avion: any): void {
    this.http.post(this.url, avion).subscribe((data) => {
      this.alet.alertaSuccess('/aeropuertos','Aeropuerto creado');
    }, (err) => { 
      this.alet.alertaError('Error al crear el aeropuerto');
    })
  }
  updateDato(dto: any): void {
    this.http.put(this.url, dto).subscribe((data) => {
      this.alet.alertaSuccess('/aeropuertos','Aeropuerto actualizado');
    }, (err) => {
      this.alet.alertaError('Error al actualizar el aeropuerto'); 

    })
  }
  deleteDato(id: string): Promise<any> {
    return this.http.delete(this.url + '/' + id).toPromise();
  }
}
