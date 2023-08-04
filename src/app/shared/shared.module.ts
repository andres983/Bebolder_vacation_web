import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';

import {
  InputDateComponent,
} from './formelements/input-date/input-date.component';

@NgModule({
  declarations: [
    InputDateComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputDateComponent
  ],
   schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SharedModule { }
