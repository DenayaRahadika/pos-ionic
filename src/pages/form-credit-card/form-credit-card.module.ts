import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormCreditCardPage } from './form-credit-card';

@NgModule({
  declarations: [
    FormCreditCardPage,
  ],
  imports: [
    IonicPageModule.forChild(FormCreditCardPage),
  ],
})
export class FormCreditCardPageModule {}
