import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-form-tigo-money',
  templateUrl: 'form-tigo-money.html',
})
export class FormTigoMoneyPage {

  tigoForm: FormGroup;

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder
  ) {
    this.tigoForm = this.makeLoginForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormTigoMoneyPage');
  }

  buyOrder(){
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
      linea: ['', [Validators.required]],
      name: ['', [Validators.required]],
      ci: ['', [Validators.required]]
    });
  }

}
