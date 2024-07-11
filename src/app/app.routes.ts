import { Routes } from '@angular/router';
import { AvionesComponent } from './Components/Avion/aviones/aviones.component';
import { RegistrarAvionComponent } from './Components/Avion/registrar-avion/registrar-avion.component';
import { ActualizarAvionComponent } from './Components/Avion/actualizar-avion/actualizar-avion.component';
import { DetallesAvionComponent } from './Components/Avion/detalles-avion/detalles-avion.component';

export const routes: Routes = [
  { path: 'aviones', component: AvionesComponent },
  { path: 'agregar-avion', component: RegistrarAvionComponent },
  { path: 'actualizar-avion/:id', component: ActualizarAvionComponent },
  { path: 'detalle-avion/:id', component: DetallesAvionComponent },

  { path: '', redirectTo: 'aviones', pathMatch: 'full' },
];
