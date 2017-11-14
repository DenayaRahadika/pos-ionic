import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {

  product: any[] = [];

  constructor(
    private viewCtrl: ViewController,
    public navCtrl: NavController, 
    public navParams: NavParams,
  ) {
    this.product = this.navParams.get('product');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
