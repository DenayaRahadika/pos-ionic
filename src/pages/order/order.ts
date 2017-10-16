import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  orders: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl: ViewController,
  ) {
    this.orders = this.navParams.get('order');
    console.log(this.orders);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }

  close(){
    return this.viewCtrl.dismiss();
  }

  delete( product, i ){
    this.orders.splice( i, 1 );
  }

}
