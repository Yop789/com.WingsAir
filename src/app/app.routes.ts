import { Routes } from '@angular/router';
import { AvionesComponent } from './Components/Avion/aviones/aviones.component';
import { RegistrarAvionComponent } from './Components/Avion/registrar-avion/registrar-avion.component';
import { ActualizarAvionComponent } from './Components/Avion/actualizar-avion/actualizar-avion.component';
import { DetallesAvionComponent } from './Components/Avion/detalles-avion/detalles-avion.component';
import { PilotosComponent } from './Components/Piloto/pilotos/pilotos.component';
import { AgregarPilotosComponent } from './Components/Piloto/agregar-pilotos/agregar-pilotos.component';
import { ActualizarPilotoComponent } from './Components/Piloto/actualizar-piloto/actualizar-piloto.component';
import { DetallePilotoComponent } from './Components/Piloto/detalle-piloto/detalle-piloto.component';
import { AereopurtosComponent } from './Components/Aereopuerto/aereopurtos/aereopurtos.component';
import { AltaAereopuertoComponent } from './Components/Aereopuerto/alta-aereopuerto/alta-aereopuerto.component';

export const routes: Routes = [
  { path: 'aviones', component: AvionesComponent },
  { path: 'agregar-avion', component: RegistrarAvionComponent },
  { path: 'actualizar-avion/:id', component: ActualizarAvionComponent },
  { path: 'detalle-avion/:id', component: DetallesAvionComponent },
  { path: 'pilotos', component:PilotosComponent },
  { path: 'agregar-piloto', component: AgregarPilotosComponent  },
  { path: 'actualizar-piloto/:id', component: ActualizarPilotoComponent },
  { path: 'detalle-piloto/:id', component: DetallePilotoComponent },
  {path: 'aereopuertos',component: AereopurtosComponent},
  {path: 'agregar-aereopuerto',component: AltaAereopuertoComponent},
  { path: '', redirectTo: 'aviones', pathMatch: 'full' },
];
