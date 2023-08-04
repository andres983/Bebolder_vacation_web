import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

import { SweetAlertService } from './sweet-alert.service';

@Injectable({
  providedIn: 'root'
})
export class UtilDateService {

  constructor(private readonly sweetAlertService: SweetAlertService) { }

  public formatDatePipe(): string {
    const fechaActual = new Date();
    const datePipe = new DatePipe('en-DO');
    return datePipe.transform(fechaActual, 'yyyy-MM-dd');
  }
  
  public formatDateParamPipe(param?: any): string {
    const datePipe = new DatePipe('en-DO');
    return datePipe.transform(param, 'yyyy-MM-dd');
  }

  public validarFechaSeleccionada(fecha: string): boolean {
    const fechaSeleccionada = this.formatDateParamPipe((fecha));
    const fechaActual = this.formatDateParamPipe(new Date());
    const mensaje = `La fecha seleccionada ${fechaSeleccionada} es mayor a actual.`;

    if (fechaSeleccionada > fechaActual) {
      this.sweetAlertService.sweetAlertInformativo(mensaje);
      return true;
    }
    else {
      return false;
    }
  }

  public validarFechaMenorALaActual(fecha: string): boolean {
    const fechaSeleccionada = this.formatDateParamPipe((fecha));
    const fechaActual = this.formatDateParamPipe(new Date());
    const mensaje = `La fecha seleccionada ${fechaSeleccionada} es menor a actual.`;

    if (fechaSeleccionada < fechaActual) {
      this.sweetAlertService.sweetAlertInformativo(mensaje);
      return true;
    }
    else {
      return false;
    }
  }

  public validarFechaFinalMayorInicial(fechaInicial: string, fechaFinal: string): boolean {
    const fechaSeleccionadaInicial = this.formatDateParamPipe((fechaInicial));
    const fechaSeleccionadaFinal = this.formatDateParamPipe((fechaFinal));
    const mensaje = `La fecha final ${fechaSeleccionadaFinal} es menor a la fecha inicial ${fechaSeleccionadaInicial}.`;
    if (fechaSeleccionadaFinal < fechaSeleccionadaInicial) {
      this.sweetAlertService.sweetAlertInformativo(mensaje);
      return true;
    }
    else {
      return false;
    }
  }

  public validarFechaActual(fecha: string): boolean {
    const fechaSeleccionada = this.formatDateParamPipe((fecha));
    const fechaActual = this.formatDateParamPipe(new Date());
    if (fechaSeleccionada === fechaActual) {
      return true;
    }
    else {
      return false;
    }
  }
}
