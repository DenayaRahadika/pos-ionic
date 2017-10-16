import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProductsService } from '../../providers/products.service';

@IonicPage({
  name: 'FamilyPage',
  segment: 'family/:lineaCode'
})

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
    this.code = this.navParams.get('lineaCode');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilyPage');
    this.getFamily();
  }

  goToProductsPage( family ){
    console.log(family.id);
    this.navCtrl.push('ProductsPage',{
      familyCode: family.id
    });
  }

  private getFamily(){
    this.productsService.getLines().then(data=>{
      for(const cod in data){
        if(data[cod].code == this.code){
          this.families = data[cod].family;
        }
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
