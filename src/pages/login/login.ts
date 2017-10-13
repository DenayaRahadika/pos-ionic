import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from '../../providers/clients.service';

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
    public clientsService: ClientsService
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
    console.log(usuario, password);
    this.navCtrl.setRoot('HomePage');
  }


  private makeLoginForm() {
    return this.formBuilder.group({
      usuario: ['', [Validators.required, Validators.minLength(6)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
}
