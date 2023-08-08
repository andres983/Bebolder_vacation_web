import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/request' },
  {
    path: 'vacation', loadChildren: () => import('./feature/vacation/vacation.module').then(mod => mod.VacationModule)
  },
  { path: '**', pathMatch: 'full', redirectTo: '/request' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
