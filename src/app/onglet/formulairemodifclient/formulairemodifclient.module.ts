import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormulairemodifclientPageRoutingModule } from './formulairemodifclient-routing.module';

import { FormulairemodifclientPage } from './formulairemodifclient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FormulairemodifclientPageRoutingModule
  ],
  declarations: [FormulairemodifclientPage]
})
export class FormulairemodifclientPageModule {}
