import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductsService } from '../../providers/products.service';

@IonicPage()
@Component({
  selector: 'page-lines',
  templateUrl: 'lines.html',
})
export class LinesPage {

  lines: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public productsService: ProductsService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LinesPage');
    this.getLines(); 
  }

  private getLines(){
    this.productsService.getData().then(data=>{
      for(const cod in data){
        this.lines.push(data[cod]);
      }
    });
  }

  goToProductsPage( line ){
    this.navCtrl.push('FamilyPage',{
      code: line.code
    });
  }

}
