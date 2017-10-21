import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from '../../providers/clients.service';

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public formBuilder: FormBuilder,
    public clientsService: ClientsService,
    public alertCtrl: AlertController,
    private storage: Storage
  ) {
    this.loginForm = this.makeLoginForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'menu');
  }

  doLogin(event: Event) {
    event.preventDefault();
    const usuario = this.loginForm.value.usuario;
    const password = this.loginForm.value.password;
    if(usuario == "zule" && password == "123456"){
      console.log(usuario, password);
      const user = JSON.stringify(usuario);
      this.storage.set('user', user);
      this.navCtrl.setRoot('HomePage', {
        user: usuario
      }); 
    }else{
      const alert = this.alertCtrl.create({
        title: 'Datos Invalidos',
        subTitle: 'Revise sus datos',
        buttons: ['OK']
      });
      alert.present();
    }
    
  }


  private makeLoginForm() {
    return this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
}
