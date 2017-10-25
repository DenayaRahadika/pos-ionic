import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController } from 'ionic-angular';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private loadCtrl: LoadingController,
    private geolocation: Geolocation,
    private mapService: MapService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapSucursalPage');
    this.load = this.loadCtrl.create({
      content: 'Buscando ruta'
    });
    this.load.present();
    this.getPosition();
  }

  private getPosition():any{
    this.geolocation.getCurrentPosition({
      maximumAge: 20000
    })
    .then(position => {
      console.log(position);
      this.myLatLng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      this.loadMap();
    })
    .catch(error =>{
      this.load.dismiss();
    })
  }

  private loadMap(){
    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: this.myLatLng,
      zoom: 8
    });
    const icon = './assets/imgs/default.png';
    console.log(this.myLatLng.lat);
    this.createMarker(this.myLatLng.lat, this.myLatLng.lng, icon , 'yo' );

    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.getSucursal(); 
    });
    this.load.dismiss();
  }

  private createMarker(lat: number, lng: number, icon: string, nombre: string) {
    console.log(lat, lng, icon, nombre );
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
    const contentString = '<div>' +
                         + nombre + '</b> </div>' +
                        '</div>';
      marker.addListener('click', () => {
      this.infowindow.setContent(contentString);
      this.infowindow.open(this.map, marker);
    });
    return marker;
  }

  private getSucursal() {
    this.mapService.getData()
    .then(data=>{
      console.log(data);
      this.sucursales = data;
      this.sucursales.forEach(sucursal => {
        console.log(sucursal);
      });
    })
  }

}
