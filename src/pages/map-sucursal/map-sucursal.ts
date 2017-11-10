import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, ModalController, PopoverController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

import { MapService } from '../../providers/map.service';

declare var google;

@IonicPage()
@Component({
  selector: 'page-map-sucursal',
  templateUrl: 'map-sucursal.html',
})
export class MapSucursalPage {

  map: any;
  load: Loading;
  myLatLng: any = {};
  infowindow: any;
  sucursales: any;
  listSucursal: any[] = [];
  itemSelected: any = null;
  sucursalID: string;

  bounds: any = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadCtrl: LoadingController,
    private geolocation: Geolocation,
    private mapService: MapService,
    private modalCtrl: ModalController,
    private popoverCtrl: PopoverController
  ) {
    this.bounds = new google.maps.LatLngBounds();
    this.infowindow = new google.maps.InfoWindow();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapSucursalPage');
    this.load = this.loadCtrl.create({
      content: 'Cargando...'
    });
    this.load.present();
    this.getPosition();
  }

  private getPosition(): any {
    this.geolocation.getCurrentPosition({
      maximumAge: 20000
    })
      .then(position => {
        this.myLatLng = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        this.loadMap();
      })
      .catch(error => {
        this.load.dismiss();
      })
  }

  private loadMap() {
    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: this.myLatLng,
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    const icon = './assets/imgs/marker1.png';
    this.createMarker(this.myLatLng.lat, this.myLatLng.lng, icon, 'yo', '');
    this.fixBounds(this.myLatLng.lat, this.myLatLng.lng);

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.getSucursal();
    });
    this.load.dismiss();
  }

  private createMarker(lat: number, lng: number, icon: string, nombre: string, direccion:string) {
    const options = {
      position: {
        lat: lat,
        lng: lng
      },
      title: nombre,
      map: this.map,
      icon: icon,
      zIndex: Math.round(lat * -100000)
    };
    const marker = new google.maps.Marker(options);
    const contentString = '<div> <b>' + nombre + '</b>' +
    '<p>' + direccion + '</p></div>';
    marker.addListener('click', () => {
      this.infowindow.setContent(contentString);
      this.infowindow.open(this.map, marker); 
    });

    return marker;
  }

  private getSucursal() {
    this.mapService.getData()
      .then(data => {
        this.sucursales = data;
        this.sucursales.forEach(sucursal => {
          console.log('sucursal', sucursal);
          let icon;
          if(sucursal.status == true){
            icon = './assets/imgs/habilitado.png';
          }else{
            icon = './assets/imgs/sucursal.png';
          }
          sucursal.marker = this.createMarker(sucursal.latitude, sucursal.longitude, icon, sucursal.name, sucursal.direccion);
          this.createMarker(sucursal.latitude, sucursal.longitude, icon, sucursal.name, sucursal.direccion);
          this.listSucursal.push({
            name: sucursal.name,
            image: sucursal.image,
            marker: sucursal.marker,
            telefono: sucursal.telefono,
            latitude: sucursal.latitude,
            longitude: sucursal.longitude,
            idSucursal: sucursal.idSucursal,
            color: 'primary'
          });
        });
        console.log("list", this.listSucursal);
      })
  }

  clickSucursal(sucursal) {
    console.log("sucursal entro")
    if (sucursal) {
      this.itemSelected = sucursal;
    }
    google.maps.event.trigger(sucursal.marker, 'click') ;
  }

  showOrder() {
    this.navCtrl.push('LinesPage');
  }

  showList() {
    this.navCtrl.push('ListSucursalPage');
  }

  showSucursal(sucursal) {
    console.log(this.itemSelected);
    let modal = this.modalCtrl.create('ViewAgencyPage', {
      sucursal: this.itemSelected,
    });
    modal.present();
  }

  presentPopoverDep(myEvent) {
    let popover = this.popoverCtrl.create('PopoverDepPage');
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(value => {
      console.log('popovover', value);
      // if (value) {
      //   this.sucursalID = value;
      //   this.listSucursal.forEach(data => {
      //     if (data.idSucursal === this.sucursalID) {
      //       this.clickSucursal(data);
      //     }
      //   })
      // }
    });
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create('PopoverListPage');
    popover.present({
      ev: myEvent
    });
    popover.onDidDismiss(value => {
      console.log('popovover', value);
      if (value) {
        this.sucursalID = value;
        this.listSucursal.forEach(data => {
          if (data.idSucursal === this.sucursalID) {
            this.clickSucursal(data);
          }
        })
      }
    });
  }

  private fixBounds(lat: number, lng: number) {
    const point = new google.maps.LatLng(lat, lng);
    this.bounds.extend(point);
    this.map.fitBounds(this.bounds);
  }

  closeOptions() {
    this.itemSelected = null;
  }

}