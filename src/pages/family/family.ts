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
          this.families = data[cod].family;
          
        }
      }
      console.log(this.families);
    })
  }

  private obtenerProductos(){

  }

}
