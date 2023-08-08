import {
  Pipe,
  PipeTransform,
} from '@angular/core';

@Pipe({
  name: 'vacationEstate'
})
export class VacationEstatePipe implements PipeTransform {

  transform(value: number): string {
    let vacationEstate: string = null;

    switch (value) {
      case 1:
        vacationEstate = 'Parcial';
        break;
      case 2:
        vacationEstate = 'Completa';
        break;
      case 3:
        vacationEstate = 'Solicitada';
        break;
      case 4:
        vacationEstate = 'Rechazada';
        break;


      default:
        break;
    }


    return vacationEstate;
  }

}
