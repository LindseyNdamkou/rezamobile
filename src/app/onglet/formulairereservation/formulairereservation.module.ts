import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormulairereservationPageRoutingModule } from './formulairereservation-routing.module';

import { FormulairereservationPage } from './formulairereservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulairereservationPageRoutingModule
  ],
  declarations: [FormulairereservationPage]
})
export class FormulairereservationPageModule {}
