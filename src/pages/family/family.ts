import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
    public productsService: ProductsService
  ) {
    this.code = this.navParams.get('code');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FamilyPage');
    console.log(this.code);
    this.getFamily();
  }

  private getFamily(){
    this.productsService.getData().then(data=>{
      for(const cod in data){
        console.log(data[cod]);
        if(data[cod].code == this.code){
          this.families = data[cod].products;
        }
      }
      console.log(this.families);
    })
  }

}
