import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsService } from '../../providers/products.service';

@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  
  products: any[] = [];
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public productsService: ProductsService
  ) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
    this.productsService.getData().then(data=>{
      console.log(data[0].products);
      this.products = data[0].products;
    })
  }
  

}
