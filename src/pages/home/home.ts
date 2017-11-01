import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, NavParams } from 'ionic-angular';

// import { OrdersService } from '../../providers/orders.service';

@IonicPage({
  name: 'HomePage',
  segment: 'home/:user'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  user: string = '';

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public navParams: NavParams
    // private orderService: OrdersService
  ) {
    this.user = this.navParams.get('user');
    console.log(this.user);
  }

  ionViewDidLoad() {
    this.getOrder();
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'menu');
  }

  private getOrder(){
    // this.orderService.getOrder(this.user);
  }
  
  verSlide() {
    console.log('info');
  }

}
