import { Component } from '@angular/core';
import { addIcons } from 'ionicons';

import {
  personOutline,
  mailOutline,
  callOutline,
  locationOutline,
  shieldCheckmarkOutline,
  carSportOutline
} from 'ionicons/icons';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList
} from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList
  ]
})
export class PerfilPage {

  nombre = 'Usuario Apex';
  correo = 'usuario@apexmotors.com';
  telefono = 'Añadir teléfono';
  ubicacion = 'Añadir ubicación';

  constructor() {
    addIcons({
      personOutline,
      mailOutline,
      callOutline,
      locationOutline,
      shieldCheckmarkOutline,
      carSportOutline
    });
  }

}