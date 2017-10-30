import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OrdersService } from '../../providers/orders.service';

@IonicPage()
@Component({
  selector: 'page-list-order',
  templateUrl: 'list-order.html',
})
export class ListOrderPage {

  orders: any[] = [];
  total: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public orderService: OrdersService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListOrderPage');
    this.getOrder();
    
  }

  private getOrder(){
    this.orderService.getOrder().valueChanges()
    .subscribe((data:any)=>{
      console.log(data[2]);
      data[2].forEach(element => {
        this.orders.push(element);
      });
    });
    console.log(this.orders);
    this.total = 48;
  }

}
