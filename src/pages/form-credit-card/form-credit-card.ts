import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-form-credit-card',
  templateUrl: 'form-credit-card.html',
})
export class FormCreditCardPage {

  creditoForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder
  ) {
    this.creditoForm = this.makeLoginForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormCreditCardPage');
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

  private makeLoginForm() {
    return this.formBuilder.group({
      num: ['', [Validators.required]],
      name: ['', [Validators.required]],
      code: ['', [Validators.required]]
    });
  }

}
