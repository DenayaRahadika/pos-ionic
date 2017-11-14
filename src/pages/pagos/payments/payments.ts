import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-payments',
  templateUrl: 'payments.html',
})
export class PaymentsPage {

  constructor(
    private navCtrl: NavController,
    private iab: InAppBrowser,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController
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

  buyOrder() {
    const loading = this.loadingCtrl.create({
      content: 'Verificando...'
    });
    loading.present();
    setTimeout(() => {
      const alert = this.alertCtrl.create({
        title: 'Exitosamente',
        subTitle: 'Se realizo la transaccion correctamente',
        buttons: ['OK']
      });
      alert.present();
      loading.dismiss();
      this.navCtrl.pop();
    }, 5000);
  }

  Reserva(){
    const loading = this.loadingCtrl.create({
      content: 'Verificando...'
    });
    loading.present();
    setTimeout(() => {
      const alert = this.alertCtrl.create({
        title: 'Exitosamente',
        subTitle: 'Lo esperamos en la sucursal para recoger su pedido',
        buttons: ['OK']
      });
      alert.present();
      loading.dismiss();
      this.navCtrl.pop();
    }, 5000);
  }
  
}
