import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ActionSheetController, AlertController } from 'ionic-angular';

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
    public actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController
  ) {
    this.products = this.navParams.get('order');
    console.log(this.products);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
    this.getProducts();
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

  showAlertDelete( product: any, i){
    let alert = this.alertCtrl.create({
      title: '¿Estás seguro?',
      message: 'El pedido se eliminara',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: ()=>{
            console.log('cancelar');
          }
        },
        {
          text: 'Si, estoy seguro',
          handler: ()=>{
            this.delete( product, i);
          }
        },
      ]
    });
    alert.present();
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
          icon: 'md-eye',
          handler: () => {
            this.navCtrl.push('OrderDetailPage',{
              product: product
            });
          }
        },
        {
          text: 'Modificar',
          icon:'md-create',
          handler: () => {
            this.navCtrl.push('EditProductPage',{
              product: product
            });
          }
        },
        {
          icon: 'md-trash',
          text: 'Eliminar',
          handler: () => {
            this.showAlertDelete(product, i);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'md-close',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }

}
