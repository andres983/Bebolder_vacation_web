import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { SweetAlertService } from '../../../core/service/sweet-alert.service';
import { UtilDateService } from '../../../core/service/util-date.service';

@Component({
  selector: 'app-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputDateComponent),
    multi: true
  }]
})
export class InputDateComponent implements ControlValueAccessor {

  @Output() ngModelChange = new EventEmitter();

  @Input() parentForm!: FormGroup;
  @Input() fieldName!: string;
  @Input() label!: string;

  public dateValue!: string;
  public value: string;
  public changed = (value: string | null) => undefined;
  public touched = () => undefined;
  public isDisabled: boolean;

  get formField(): AbstractControl {
    return this.parentForm?.get(this.fieldName) as AbstractControl;
  }

  constructor(
    private readonly utilDateService: UtilDateService,
    private readonly sweetAlertService: SweetAlertService) { }

  writeValue(value: string | null): void {
    value = value ?? this.utilDateService.formatDatePipe();
  }

  public onChange(event: Event): void {
    const fechaSeleccionada = this.utilDateService.formatDateParamPipe((event.target as HTMLInputElement).value);

    const esFechaMenorALaActual = this.utilDateService.validarFechaMenorALaActual(fechaSeleccionada);

    if (esFechaMenorALaActual === true) {
      this.sweetAlertService.sweetAlertInformativo("La fecha no puede ser menor a la actual");
      this.changed(this.utilDateService.formatDatePipe());
      this.touched();
    } else {

      this.changed(fechaSeleccionada);
      this.touched();
    }
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.changed = fn;
  }
  registerOnTouched(fn: any): void {
    this.touched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }



}