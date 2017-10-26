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
