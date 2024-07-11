import { Time } from '@angular/common';

export interface Avion {
  // private Long id;

  // private String codigoAvion;
  // private TipoAviones tipoAvion;
  // private LocalTime horasVuelo;
  // private int capacidadPasajero

  codigoAvion: string;
  tipoAvion: string;
  horasVuelo: string;
  capacidadPasajeros: number;
}

export interface Avionid {
  // private Long id;

  // private String codigoAvion;
  // private TipoAviones tipoAvion;
  // private LocalTime horasVuelo;
  // private int capacidadPasajero
  id: number;
  codigoAvion: string;
  tipoAvion: string;
  horasVuelo: string;
  capacidadPasajeros: number;
}
