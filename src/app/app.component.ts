import { Component } from '@angular/core';

import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle
} from '@ionic/angular';

import { OpcionesNavegacionComponent } from './opciones-navegacion/opciones-navegacion.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [
    IonApp,
    IonRouterOutlet,
    IonMenu,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    OpcionesNavegacionComponent
  ],
})
export class AppComponent {
  constructor() {}
}