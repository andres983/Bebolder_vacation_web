import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

import { IResponseRequestVacation } from '../../data/IResponseRequestVacation';
import { VacationService } from '../../services/vacation.service';

@Component({
  selector: 'app-vacation-request',
  templateUrl: './vacation-request.component.html',
  styleUrls: ['./vacation-request.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VacationRequestComponent implements OnInit {

  public listRequest: IResponseRequestVacation[] = [];

  constructor(
    private readonly vacationService: VacationService,
    private readonly cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getRequest();
  }


  public getRequest(): void {
    this.vacationService.getRequest(1).subscribe({
      next: (response: IResponseRequestVacation[]) => {
        this.listRequest = [...this.listRequest, ...response];
        this.cdr.detectChanges();
      }
    })


  }
}
