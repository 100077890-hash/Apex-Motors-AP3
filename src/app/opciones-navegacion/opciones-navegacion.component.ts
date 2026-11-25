import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';

import {
  homeOutline,
  carSportOutline,
  personOutline,
  settingsOutline
} from 'ionicons/icons';

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
    CommonModule,
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
    },
    {
      titulo: 'Perfil',
      icono: 'person-outline',
      ruta: '/perfil'
    },
    {
      titulo: 'Configuración',
      icono: 'settings-outline',
      ruta: '/configuracion'
    }
  ];

  constructor() {
    addIcons({
      homeOutline,
      carSportOutline,
      personOutline,
      settingsOutline
    });
  }
}