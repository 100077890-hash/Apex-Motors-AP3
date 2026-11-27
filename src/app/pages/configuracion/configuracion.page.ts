import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';

import {
  notificationsOutline,
  mailOutline,
  shieldCheckmarkOutline,
  eyeOutline,
  informationCircleOutline
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
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonToggle
} from '@ionic/angular';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonToggle
  ]
})
export class ConfiguracionPage {

  notificaciones = true;
  ofertasCorreo = false;
  privacidad = true;

  constructor() {
    addIcons({
      notificationsOutline,
      mailOutline,
      shieldCheckmarkOutline,
      eyeOutline,
      informationCircleOutline
    });
  }

}