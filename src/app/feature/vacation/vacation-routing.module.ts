import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import {
  VacationRequestComponent,
} from './containers/vacation-request/vacation-request.component';
import { HomeVacationComponent } from './home-vacation/home-vacation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeVacationComponent,
    children: [
      { path: 'request', component: VacationRequestComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VacationRoutingModule { }
