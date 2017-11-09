import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { MapService } from '../../providers/map.service';

@IonicPage()
@Component({
  selector: 'page-list-sucursal',
  templateUrl: 'list-sucursal.html',
})
export class ListSucursalPage {

  sucursales: any;
  listSucursal: any[] = [];
  itemSelected: any = null;
  sucursalID: string;
  search: number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private mapService: MapService,
    private modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListSucursalPage');
    this.getSucursal();
    this.getDepto();
  }

  private getSucursal() {
    this.mapService.getData()
      .then(data => {
        let colorSelec;
        this.sucursales = data;
        this.sucursales.forEach(sucursal => {
          if(sucursal.status == true){
            colorSelec = 'secondary';
          }else{
            colorSelec = 'primary';
          }
          this.listSucursal.push({
            name: sucursal.name,
            image: sucursal.image,
            marker: sucursal.marker,
            telefono: sucursal.telefono,
            latitude: sucursal.latitude,
            longitude: sucursal.longitude,
            idSucursal: sucursal.idSucursal,
            direccion: sucursal.direccion,
            depto: sucursal.ID_DEPTO,
            color: colorSelec
          });
        });
        console.log("list", this.listSucursal);
      })
  }

  private getDepto(){
    this.mapService.getDepto()
    .then(data=>{
      console.log('depto', data);
      data.forEach(element => {
      });
    })
  }

  clickSucursal(sucursal) {
    if (sucursal) {
      this.itemSelected = sucursal;
    }
  }

  showOrder() {
    this.navCtrl.push('LinesPage');
  }

  showSucursal(sucursal) {
    console.log(this.itemSelected);
    let modal = this.modalCtrl.create('ViewAgencyPage', {
      sucursal: this.itemSelected,
    });
    modal.present();
  }

  showSearch() {
    this.search = 1;
 }
  closeOptions() {
    this.itemSelected = null;
  }

}
