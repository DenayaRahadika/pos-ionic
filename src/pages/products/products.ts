import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, AlertController } from 'ionic-angular';
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
  productShow: any[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public productsService: ProductsService,
    private toasCtrl: ToastController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController
  ) {
    this.codefamily = this.navParams.get('familyCode');
    console.log(this.codefamily);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
    this.getProducts();
  }

  private getProducts() {
    this.productsService.getFamily()
      .then(data => {
        console.log(data);
        for (const cod in data) {
          if (data[cod].id == this.codefamily) {
            this.products = data[cod].products;
          }
        }
        this.productShow = this.products;
        console.log(this.products);
      })
  }

  clickedProduct(product) {
    this.productSelected = Object.assign({}, product);
    this.productSelected.count = 0;
  }

  getIsActive(product) {
    if (this.productSelected === null) {
      return false;
    } else {
      return (this.productSelected.code + this.productSelected.name) == (product.code + product.name);
    }
  }

  showCountAlert(event: Event) {
    event.preventDefault();
    const alert = this.alertCtrl.create({
      title: 'Cantidad',
      inputs: [
        {
          name: 'count',
          type: 'number',
          min: '0',
          value: this.productSelected.count
        }
      ],
      buttons: [
        {
          text: 'Aceptar'
        }
      ]
    });
    alert.present();
    alert.onDidDismiss((data) => {
      console.log(data);
      if(data.count > 0) {
        this.productSelected.count = data.count;
      }
    });
  }

  add() {
    this.productSelected.count++;
  }

  remove() {
    if (this.productSelected.count > 0) {
      this.productSelected.count--;

    }
  }

  close() {
    this.productSelected = null;
  }

  addProduct() {
    this.showLoad = true;
    if(this.productsOrder.length <= 0){
      this.productsOrder.push(this.productSelected);
    }else
    {
      this.productsOrder.forEach(data => {
        console.log('order', this.productsOrder)
        if(data.code === this.productSelected.code){
          console.log('dat code', data.code);
          console.log('product select', this.productSelected.code);
          //update
        }else{
          this.productsOrder.push(this.productSelected);
        }
      });
    }
    this.showLoad = false;
    this.close();
    let toast = this.toasCtrl.create({
      message: 'Producto agregado',
      duration: 1000
    });
    toast.present();
  }

  showOrder() {
    let modal = this.modalCtrl.create('OrderPage', {
      order: this.productsOrder
    });
    modal.present();
  }

  search(event: any) {
    if (event.target && event.target.value) {
      let query = event.target.value.trim();
      console.log(query);
      this.productShow = this.products.filter(item => {
        return item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      });
    } else {
      this.productShow = this.products;
    }
  }

  detailProduct(product) {
    console.log("detail");
    this.productSelected = Object.assign({}, product);
    this.navCtrl.push('ProductPage', {
      product: product
    });
  }
}
