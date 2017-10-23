import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ActionSheetController } from 'ionic-angular';

// import { OrdersService } from '../../providers/orders.service';

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
    // private orderService: OrdersService,
    public actionSheetCtrl: ActionSheetController
  ) {
    this.products = this.navParams.get('order');
    console.log(this.products);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
    this.getClient();
    this.getProducts();
  }

  private getClient(){

  }

  addOrder(){
    // this.orderService.addOrder(this.products);
    this.navCtrl.push('PaymentsPage');
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

  showActionSheet(product, i){
    console.log(product, i);
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Opciones',
      buttons: [
        {
          text: 'Ver',
          handler: () => {
            this.navCtrl.push('ProductPage',{
              product: product
            });
          }
        },
        {
          text: 'Modificar',
          handler: () => {
            this.navCtrl.push('EditProductPage',{
              product: product
            });
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }

}
