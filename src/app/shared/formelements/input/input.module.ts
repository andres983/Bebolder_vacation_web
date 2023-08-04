import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';

import { MaterialModule } from '../../libreriasUI/material/material.module';
import { InputDateComponent } from './input-date.component';

@NgModule({
  declarations: [
    InputDateComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
    
  ],
  exports: [
    InputDateComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class InputModule { }
