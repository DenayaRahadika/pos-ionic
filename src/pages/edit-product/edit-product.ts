import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-edit-product',
  templateUrl: 'edit-product.html',
})
export class EditProductPage {

  product: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {
    this.product = this.navParams.get('product');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProductPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
