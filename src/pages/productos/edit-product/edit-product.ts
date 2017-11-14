import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-product',
  templateUrl: 'edit-product.html',
})
export class EditProductPage {

  product: any[] = [];
  value: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl: ViewController
  ) {
    this.product = this.navParams.get('product');
    console.log(this.product);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProductPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  onKey(value: number) {
    console.log('value', value);
    this.value = value;
  }

  save() {
    console.log('cantidad', this.value);
    this.product["count"] = this.value;
    this.viewCtrl.dismiss();
  }

}
