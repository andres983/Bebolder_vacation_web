import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacationRoutingModule } from './vacation-routing.module';
import { VacationRequestComponent } from './vacation-request/vacation-request.component';


@NgModule({
  declarations: [
    VacationRequestComponent
  ],
  imports: [
    CommonModule,
    VacationRoutingModule
  ],
  exports: [
    VacationRequestComponent
  ]
})
export class VacationModule { }
