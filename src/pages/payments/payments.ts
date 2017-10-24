import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html',
})
export class PaymentsPage {

  constructor(
    private navCtrl: NavController,
    private iab: InAppBrowser
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentsPage');
  }


  showPage(page: string) {
    this.iab.create(page);
  }

  goToFormCreditCard() {
    this.navCtrl.push('FormCreditCardPage');
  }

  goToFormTigoMoney() {
    this.navCtrl.push('FormTigoMoneyPage');
  }

}
