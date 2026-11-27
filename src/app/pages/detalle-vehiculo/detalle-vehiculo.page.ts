import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonBadge
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  speedometerOutline,
  calendarOutline,
  settingsOutline,
  waterOutline,
  shieldCheckmarkOutline,
  cashOutline,
  carSportOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-detalle-vehiculo',
  templateUrl: './detalle-vehiculo.page.html',
  styleUrls: ['./detalle-vehiculo.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonBadge
  ]
})
export class DetalleVehiculoPage {

  escala = 1;
  distanciaInicial = 0;
  escalaInicial = 1;

  temporizadorLongPress: ReturnType<typeof setTimeout> | undefined;
  mostrarInfo = false;

  posicionInicialX = 0;
  posicionInicialY = 0;

  constructor() {
    addIcons({
      arrowBackOutline,
      speedometerOutline,
      calendarOutline,
      settingsOutline,
      waterOutline,
      shieldCheckmarkOutline,
      cashOutline,
      carSportOutline
    });
  }

  iniciarGestos(event: TouchEvent) {
    if (event.touches.length === 2) {
      this.cancelarPulsacion();

      this.distanciaInicial = this.calcularDistancia(
        event.touches[0],
        event.touches[1]
      );

      this.escalaInicial = this.escala;

    } else if (event.touches.length === 1) {
      this.posicionInicialX = event.touches[0].clientX;
      this.posicionInicialY = event.touches[0].clientY;

      this.temporizadorLongPress = setTimeout(() => {
        this.mostrarInfo = true;
      }, 700);
    }
  }

  moverGestos(event: TouchEvent) {
    if (event.touches.length === 2) {
      this.cancelarPulsacion();

      const distanciaActual = this.calcularDistancia(
        event.touches[0],
        event.touches[1]
      );

      if (this.distanciaInicial > 0) {
        const nuevaEscala =
          this.escalaInicial *
          (distanciaActual / this.distanciaInicial);

        this.escala = Math.min(2.5, Math.max(1, nuevaEscala));
      }

    } else if (event.touches.length === 1) {
      const movimientoX = Math.abs(
        event.touches[0].clientX - this.posicionInicialX
      );

      const movimientoY = Math.abs(
        event.touches[0].clientY - this.posicionInicialY
      );

      if (movimientoX > 12 || movimientoY > 12) {
        this.cancelarPulsacion();
      }
    }
  }

  finalizarGestos() {
    this.cancelarPulsacion();
    this.distanciaInicial = 0;
  }

  calcularDistancia(touch1: Touch, touch2: Touch): number {
    const diferenciaX = touch2.clientX - touch1.clientX;
    const diferenciaY = touch2.clientY - touch1.clientY;

    return Math.sqrt(
      diferenciaX * diferenciaX +
      diferenciaY * diferenciaY
    );
  }

  cancelarPulsacion() {
    if (this.temporizadorLongPress) {
      clearTimeout(this.temporizadorLongPress);
      this.temporizadorLongPress = undefined;
    }
  }

  cerrarInfo() {
    this.mostrarInfo = false;
  }

  cotizarVehiculo() {
    // Aquí podremos conectar posteriormente la solicitud de cotización.
  }
}
