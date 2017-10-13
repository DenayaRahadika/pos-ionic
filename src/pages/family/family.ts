import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProductsService } from '../../providers/products.service';

@IonicPage()
@Component({
  selector: 'page-family',
  templateUrl: 'family.html',
})
export class FamilyPage {

  code: string = '';
  families: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public productsService: ProductsService,
    public modalCtrl: ModalController,
  ) {
    this.code = this.navParams.get('familyCode');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilyPage');
    this.getFamily();
  }

  private getFamily(){
    this.productsService.getLines().then(data=>{
      for(const cod in data){
        if(data[cod].code == this.code){
          console.log(data[cod].family);
          this.families = data[cod].family;
          this.obtenerProductos(data[cod].family);
        }
      }
    })
  }

  private obtenerProductos(codFamily){
    this.productsService.getFamily()
    .then(data=>{
      console.log(data);
      for(const cod in data){
        this.families = data[0].products;
      }
      console.log(this.families);
    })
  }

  showProduct( family ){
    console.log(family);
    const modal = this.modalCtrl.create('ProductPage',{
      product: family
    });
    modal.present();
  }

}
