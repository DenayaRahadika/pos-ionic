import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProductsService } from '../../providers/products.service';

@IonicPage()
@Component({
  selector: 'page-lines',
  templateUrl: 'lines.html',
})
export class LinesPage {
  
  lines: any[] = [];
  linesShow: any[] = [];

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
      alert.setTitle('Sucursal');
      sucursal.forEach(element => {
        console.log(element);
        alert.addInput({
          type: 'radio',
          label: element.name,
          value: element.idSucursal,
          checked: false
        });
    });
    alert.addButton({
      text: 'Cancel',
      handler: data => {
        console.log('cancel', data);
      }
    });
    alert.addButton({
      text: 'OK',
      handler: data => {
        console.log('ok', data);
      }
    });
    alert.present();
  })
      this.getLines(); 
  }

  private getLines(){
    this.productsService.getLines().then(data=>{
      for(const cod in data){
        this.lines.push(data[cod]);
      }
      this.linesShow = this.lines;
    });
  }

  goToFamilyPage( line ){
    this.navCtrl.push('FamilyPage',{
      lineaCode: line.code
    });
  }

  search(event: any){
    if(event.target && event.target.value){
      let query = event.target.value.trim();
       this.linesShow = this.lines.filter(item => {
        return item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      });
    }else{
      this.linesShow = this.lines;
    }
  }

}
