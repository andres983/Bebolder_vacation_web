import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';

import { SubSink } from 'subsink';

import { constantes } from '../../../../core/data/Constantes';
import {
  SweetAlertService,
} from '../../../../core/service/sweet-alert.service';
import { UtilDateService } from '../../../../core/service/util-date.service';
import { IRegistrationRequest } from '../../data/IRegistrationRequest';
import { IResponseRequestVacation } from '../../data/IResponseRequestVacation';
import { VacationService } from '../../services/vacation.service';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};
@Component({
  selector: 'app-vacation-request-form',
  templateUrl: './vacation-request-form.component.html',
  styleUrls: ['./vacation-request-form.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },

  ],
})
export class VacationRequestFormComponent implements OnInit, OnDestroy {

  private subs = new SubSink();

  public applicationForm: FormGroup = new FormGroup({});
  public initialDate?: string;

  constructor(
    private readonly fb: FormBuilder,
    private readonly sweetAlertService: SweetAlertService,
    private readonly vacationService: VacationService,
    private readonly utilDateService: UtilDateService) { }

  ngOnInit(): void {
    this.formBuild();
    // this.obtenerFechaActual();
  }

  public formBuild(): void {
    this.applicationForm = this.fb.group({
      fechaInicial: [this.utilDateService.formatDatePipe(), [Validators.required]],
      fechaReintegro: [this.utilDateService.formatDatePipe(), [Validators.required]],

    });
  }

  public obtenerFechaActual(): void {
    const fechaActual = this.utilDateService.formatDatePipe();
    this.initialDate = this.utilDateService.formatDatePipe()
    this.applicationForm.controls.fechaInicial.setValue(fechaActual);
    this.applicationForm.controls.fechaReintegro.setValue(fechaActual);
  }

  public submitRegistrationForm(): void {

    if (this.applicationForm.valid) {
      const iRegistrationRequest: IRegistrationRequest = {
        employeeId: 1,
        initialDate: this.applicationForm.controls.fechaInicial.value,
        withdrawalDate: this.applicationForm.controls.fechaReintegro.value
      }

      this.sweetAlertService.sweetAlertAccionBoton(constantes.MENSAJE_CONFIRMACION_REGISTRO_SOLICITUD_VACACION).then((accion: boolean) => {

        if (accion) {
          this.subs.add(this.vacationService.createRequest(iRegistrationRequest).subscribe({
            next: (response: IResponseRequestVacation) => {

              if (Object.keys(response).length >= 1) {
                this.sweetAlertService.sweetAlertExito(constantes.MENSAJE_CONFIRMACION_REGISTRO_SOLICITUD_VACACION_EXITOSO);
                this.cleanForm();
              }
            }
          }));
        }
      });
    } else {
      this.sweetAlertService.sweetAlertInformativo(constantes.MENSAJE_VERIFIQUE_CAMPOS_FORMULARIO);
    }
  }


  public cleanForm(): void {
    this.applicationForm.reset();
    this.applicationForm.controls.fechaInicial.setValue('');
    this.applicationForm.controls.fechaReintegro.setValue('');
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

