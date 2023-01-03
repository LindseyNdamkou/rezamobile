import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormulairemodifclientPage } from './formulairemodifclient.page';

const routes: Routes = [
  {
    path: '',
    component: FormulairemodifclientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulairemodifclientPageRoutingModule {}
