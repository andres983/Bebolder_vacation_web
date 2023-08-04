import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { InputModule } from '../../shared/formelements/input/input.module';
import { SharedModule } from '../../shared/shared.module';
import {
  TableRequestComponent,
} from './components/table-request/table-request.component';
import {
  VacationRequestComponent,
} from './containers/vacation-request/vacation-request.component';
import { HomeVacationComponent } from './home-vacation/home-vacation.component';
import { VacationRoutingModule } from './vacation-routing.module';

@NgModule({
  declarations: [
    VacationRequestComponent,
    TableRequestComponent,
    HomeVacationComponent
  ],
  imports: [
    CommonModule,
    VacationRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputModule,
    SharedModule
  ],
  exports: [
    VacationRequestComponent,
    TableRequestComponent,
    HomeVacationComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class VacationModule { }
