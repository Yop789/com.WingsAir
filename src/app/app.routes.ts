import { Routes } from '@angular/router';
import { AvionesComponent } from './Components/Avion/aviones/aviones.component';
import { RegistrarAvionComponent } from './Components/Avion/registrar-avion/registrar-avion.component';

export const routes: Routes = [
  { path: 'aviones', component: AvionesComponent },
  { path: 'agregar-avion', component: RegistrarAvionComponent },
  { path: '', redirectTo: 'aviones', pathMatch: 'full' },
];
