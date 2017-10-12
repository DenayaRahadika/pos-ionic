import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProductsService } from '../../providers/products.service';

@IonicPage()
@Component({
  selector: 'page-lines',
  templateUrl: 'lines.html',
})
export class LinesPage {
  
  testRadioOpen: any;
  testRadioResult: any;
  lines: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public productsService: ProductsService,
    public alertCtrl: AlertController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LinesPage');
    this.getSucursal();
  }

  private getSucursal(){
    this.productsService.getSucursal()
    .then(sucursal=>{
      let alert = this.alertCtrl.create();
      alert.setTitle('Elige Sucursal');
      sucursal.forEach(element => {
        console.log(element);
        alert.addInput({
          type: 'radio',
          label: element.name,
          value: element.idSucursal,
          checked: false
        });
    });
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log(data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
      }
    });
    alert.present();
    console.log(this.testRadioResult);
  })
      this.getLines(); 
  }

  private getLines(){
    this.productsService.getLines().then(data=>{
      for(const cod in data){
        this.lines.push(data[cod]);
      }
    });
  }

  goToProductsPage( line ){
    this.navCtrl.push('FamilyPage',{
      familyCode: line.code
    });
  }

}
