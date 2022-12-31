import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormulairereservationPage } from './formulairereservation.page';

const routes: Routes = [
  {
    path: '',
    component: FormulairereservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulairereservationPageRoutingModule {}
