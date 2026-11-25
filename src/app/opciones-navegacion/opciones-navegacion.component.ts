import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonList,
  IonItem,
  IonIcon,
  IonLabel
} from '@ionic/angular';

@Component({
  selector: 'app-opciones-navegacion',
  templateUrl: './opciones-navegacion.component.html',
  styleUrls: ['./opciones-navegacion.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    IonList,
    IonItem,
    IonIcon,
    IonLabel
  ]
})
export class OpcionesNavegacionComponent {

  opciones = [
    {
      titulo: 'Inicio',
      icono: 'home-outline',
      ruta: '/home'
    },
    {
      titulo: 'Catálogo de vehículos',
      icono: 'car-sport-outline',
      ruta: '/catalogo'
    }
  ];

}