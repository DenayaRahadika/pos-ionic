import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { OrdersService } from '../../providers/orders.service';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  products: any[] = [];
  total: number = 0;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private orderService: OrdersService
  ) {
    this.products = this.navParams.get('order');
    console.log(this.products);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
    this.getProducts();
  }

  addOrder(){
    this.orderService.addOrder(this.products);
  }

  close(){
    return this.viewCtrl.dismiss();
  }

  delete( product, i ){
    this.products.splice( i, 1 );
  }

  private getProducts(){
      let total = 0;
      this.products.forEach((item)=>{
        total+= item.precio * item.count
        console.log(item);
      });
      this.total = total;
  }

}
