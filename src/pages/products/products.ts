import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { ProductsService } from '../../providers/products.service';

@IonicPage({
  name: 'ProductsPage',
  segment: 'products/:familyCode'
})

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  codefamily: string = '';
  products: any[] = [];
  productsOrder: any[] = [];
  productSelected: any = null;
  showLoad: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public productsService: ProductsService,
    private toasCtrl: ToastController,
    private modalCtrl: ModalController
  ) {
    this.codefamily = this.navParams.get('familyCode');
    console.log(this.codefamily);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
    this.getProducts();
  }

  private getProducts(){
    this.productsService.getFamily()
    .then(data =>{
      console.log(data);
      for(const cod in data){
        if(data[cod].id == this.codefamily){
          this.products = data[cod].products;
        }
      }
      console.log(this.products);
    })
  }

  clickedProduct( product ){
    this.productSelected = Object.assign({}, product);
    this.productSelected.count = 0;
  }

  getIsActive( product ){
    if(this.productSelected === null){
      return false;
    }else{
      return (this.productSelected.code+this.productSelected.name) == (product.code+product.name);
    }
  }

  add(){
    this.productSelected.count++;
  }

  remove(){
    this.productSelected.count--;
  }

  close(){
    this.productSelected = null;
  }

  addProduct(){
    this.showLoad = true;
    this.productsOrder.push(this.productSelected);
    this.showLoad = false;
      this.close();
      let toast = this.toasCtrl.create({
        message: 'Producto agregado',
        duration: 1000
      });
      toast.present();
  }

  showOrder(){
    let modal = this.modalCtrl.create('OrderPage',{
      order: this.productsOrder
    });
    modal.present();
  }

}
