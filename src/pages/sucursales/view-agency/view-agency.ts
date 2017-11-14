import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-agency',
  templateUrl: 'view-agency.html',
})
export class ViewAgencyPage {

  sucursal: any = null;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {
    this.sucursal = this.navParams.get('sucursal');
    console.log(this.sucursal);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewAgencyPage');
  }

  close(){
    this.viewCtrl.dismiss();
  }

}
